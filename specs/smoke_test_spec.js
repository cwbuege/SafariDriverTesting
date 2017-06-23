'use strict';

/**
 * Page object exports
 * The files are located in the 'pages' folder
 */
var UsersPage = require('../pages/users.page.js');

/**
 * Page object instantiation
 */
var usersPage = new UsersPage();

/**
 * Test data exports
 * The files are located in the 'data' folder
 */
var usersData = require('../data/users.json');

/*
 * Boolean variables to control test execution
 */
var bUserEntry;                  // Function:  userEntry

/**
 * Smoke Test Suite
 */
describe('MRM Web Smoke Test', function () {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000000;

    /**
     * Standardize browser window size before starting the tests
     */
    beforeAll(function() {
        browser.manage().window().maximize();
    });

    /**
     * Refresh browser after each test
     */
    beforeEach(function () {
//        browser.ignoreSynchronization = true;
//        browser.refresh();
    });

    /**
     * Close the browser window after all tests have been executed
     */
    afterAll(function() {
        browser.close();
    });

    switch (browser.params.tests) {
        case 'working':
            bUserEntry = true;
            break;
    }

    if (bUserEntry) {
        it('should test the user entry of information.  ~~userEntry~~', function () {
            browser.get(browser.params.stackURL);
            usersPage.userEntry();
        });
    }

});