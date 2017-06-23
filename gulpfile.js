var gulp = require('gulp-param')(require('gulp'), process.argv);
var protractor = require("gulp-protractor").protractor;
var del = require('del');

gulp.task('clean', function (cb) {
    del(['testresults'], cb);
});

gulp.task('run', ['clean'], function (stack, target, tests) {
    var stackURL = '';
    var seleniumAddress = '';
    var username = '';
    var password = '';
    var timeout = 120000;
    var seleniumJarPath = './node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar';
    var framework = 'jasmine2';
    var confFile = '';
    var specFile = '';

    switch (stack) {
        case 'site01':
            stackURL = 'https://sircharles.guru/auto-test/userinfo.php';
            username = '';
            password = '';
            specFile = './specs/smoke_test_spec.js';
            break;
    }

    switch (target) {
        case 'local':
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
            break;
        default:
            console.log('Target parameter for gulp not specified!  Aborting test execution.')
    }
});
