exports.config = {
    capabilities: {
        'browserName': 'safari',
        'safari.options': {technologyPreview: true}
//        'version': '11',
//        'platform': 'Windows 10',
//        'version': '15.16215'
//        browserName: 'firefox'
    },
    specs: ['../specs/smoke_test_spec.js'],
    onPrepare: function () {
        /**
         * Required config for non-angular application
         */
        browser.ignoreSynchronization = true;

        /**
         * Reports plugins
         */
        var jasmineReporters = require('jasmine-reporters');
        var HtmlScreenshotReporter = require('protractor-jasmine2-html-reporter');
        return browser.getProcessedConfig().then(function (config) {
            var platformName = config.capabilities.platform || '';
            var browserName = config.capabilities.browserName;
            var version = config.capabilities.version || '';
            var stack = config.params.stack;
            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testresults',
                filePrefix: stack + platformName + browserName + version + '-xmloutput',
                modifySuiteName: function (generatedSuiteName, suite) {
                    return stack + platformName + browserName + version + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
            jasmine.getEnv().addReporter(
                new HtmlScreenshotReporter({
                    savePath: './testresults/',
                    screenshotsFolder: 'images',
                    takeScreenshots: true,
                    takeScreenshotsOnlyOnFailures: false,
                    filePrefix: stack + platformName + browserName + version + '-report.html'
                })
            );
        });
    }
};