var gulp = require('gulp-param')(require('gulp'), process.argv);
var protractor = require("gulp-protractor").protractor;
var browserStack = require('gulp-browserstack');
var del = require('del');

gulp.task('clean', function (cb) {
    del(['testresults'], cb);
});

gulp.task('run', ['clean'], function (stack, target, tests, browser) {
    var stackURL = '';
    var seleniumAddress = '';
    var username = '';
    var password = '';
    var timeout = 120000;
//    var seleniumJarPath = './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar';
    var seleniumJarPath = './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar';
    var framework = 'jasmine2';
    var confFile = '';
    var specFile = '';
    var browserstackKey = '8QpmNeoyLjfcbekx1qkc';

    switch (stack) {
        case 'mcdev3':
            stackURL = 'https://www.mcdev3.temeda.com';
            username = 'dave@att.com';
            password = 'test';
            specFile = './specs/smoke_test_mobile.js';
            break;
        case 'mctest-mobile':
            stackURL = 'https://www.mctest.temeda.com';
            username = 'qa.testing@temeda.com';
            password = 'Very5ecureP@ssw0rd';
            specFile = './specs/smoke_test_mobile.js';
            break;
        case 'mctest-regular-user':
            stackURL = 'https://www.mctest.temeda.com';
            username = 'qa.testing@temeda.com';
            password = 'Very5ecureP@ssw0rd';
            specFile = './specs/smoke_test_regular_user.js';
            break;
        case 'mcdev2':
            stackURL = 'https://www.mcdev2.temeda.com';
            username = 'qa.testing@temeda.com';
            password = 'Very5ecureP@ssw0rd';
            specFile = './specs/smoke_test_spec.js';
            break;
        case 'mcdev':
            stackURL = 'https://www.mcdev.temeda.com';
            username = 'dave@att.com';
            password = 'test';
            specFile = './specs/smoke_test_spec.js';
            break;
        case 'mctest':
            stackURL = 'https://www.mctest.temeda.com';
            username = 'qa.testing@temeda.com';
            password = 'Very5ecureP@ssw0rd';
            specFile = './specs/smoke_test_spec.js';
            break;
        case 'mctest-ie':
            stackURL = 'https://www.mctest.temeda.com';
            username = 'user@bear.com';
            password = 'test';
            specFile = './specs/smoke_test_spec.js';
            break;
        case 'qa':
            stackURL = 'https://qa.temeda.com/opening.html';
            username = 'naren_iyer@yahoo.com';
            password = 'tester100';
            specFile = './specs/smoke_test_spec.js';
            break;
        case 'prod':
            stackURL = 'https://att.temeda.com';
            username = 'dave@att.com';
            specFile = './specs/smoke_test_spec.js';
            break;
        case 'prodcopy':
            stackURL = 'https://www.prodcopy.temeda.com/login.html';
            username = 'vaidyanathan.shanmugam@gmail.com';
            password = 'tester100';
            specFile = './specs/smoke_test_spec.js';
            break;
    }

    switch (target) {
        case 'bs':
            seleniumAddress = 'http://hub.browserstack.com/wd/hub';
            switch (browser) {
                case 'safari':
                    confFile = './conf/conf-bs-safari.js';
                    break;
                case 'win7-chrome':
                    confFile = './conf/conf-bs-win7-chrome.js';
                    break;
                case 'win7-firefox':
                    confFile = './conf/conf-bs-win7-firefox.js';
                    break;
                case 'win7-ie':
                    confFile = './conf/conf-bs-win7-ie.js';
                    break;
                case 'win10-chrome':
                    confFile = './conf/conf-bs-win10-chrome.js';
                    break;
                case 'win10-firefox':
                    confFile = './conf/conf-bs-win10-firefox.js';
                    break;
                case 'win10-ie':
                    confFile = './conf/conf-bs-win10-ie.js';
                    break;
                case 'win10-edge':
                    confFile = './conf/conf-bs-win10-edge.js';
                    break;
            }
            return gulp.src(specFile)
                .pipe(browserStack.startTunnel(
                    {
                        key: browserstackKey
                    }
                ))
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--params.tests', tests
                        ]
                    }
                ))
                .pipe(browserStack.stopTunnel());
        case 'local':
            confFile = './conf/conf-local.js';
            return gulp.src(specFile)
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--seleniumServerJar', seleniumJarPath,
                            '--params.tests', tests
                        ]
                    }
                ));
        case 'local-regular-user':
            confFile = './conf/conf-local-regular-user.js';
            return gulp.src(specFile)
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--seleniumServerJar', seleniumJarPath,
                            '--params.tests', tests
                        ]
                    }
                ));
        case 'local-win10-ie':
            confFile = './conf/conf-local-win10-ie.js';
            return gulp.src(specFile)
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--seleniumServerJar', seleniumJarPath,
                            '--params.tests', tests
                        ]
                    }
                ));
        // Edge testing
        case 'local-win10-edge':
            confFile = './conf/conf-local-win10-edge.js';
            return gulp.src(specFile)
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--seleniumServerJar', seleniumJarPath,
                            '--params.tests', tests
                        ]
                    }
                ));
        // Safari testing
        case 'local-safari':
            confFile = './conf/conf-local-safari.js';
            return gulp.src(specFile)
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--seleniumServerJar', seleniumJarPath,
                            '--params.tests', tests
                        ]
                    }
                ));
        case 'local-mobile':
            confFile = './conf/conf-local-chrome-mobile.js';
            return gulp.src(specFile)
                .pipe(protractor(
                    {
                        configFile: confFile,
                        args: [
                            '--params.stack', stack,
                            '--params.stackURL', stackURL,
                            '--params.username', username,
                            '--params.password', password,
                            '--jasmineNodeOpts.showColors', true,
                            '--jasmineNodeOpts.defaultTimeoutInterval', timeout,
                            '--defaultTimeoutInterval.isVerbose', true,
                            '--defaultTimeoutInterval.includeStackTrace', true,
                            '--allScriptsTimeout', timeout,
                            '--framework', framework,
                            '--seleniumAddress', seleniumAddress,
                            '--seleniumServerJar', seleniumJarPath,
                            '--params.tests', tests
                        ]
                    }
                ));
        default:
            console.log('Target parameter for gulp not specified!  Aborting test execution.')
    }
});
