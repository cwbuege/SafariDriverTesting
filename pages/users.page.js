'use strict';

/**
 * Test data exports
 * The files are located in the 'data' folder
 */
var timeOut = require('../data/timeout.json');
var userData = require('../data/users.json');

/**
 * Page object
 * @constructor
 */
var UsersPage = function () {

    /**
     * Test data for the constructor is fed from the spec file calling this function
     * @param asset_name
     * @param timezone
     * @constructor
     */
    this.userEntry = function(){

        console.log('');
        console.log('-----------------------------------');
        console.log('Function:  userEntry');
        console.log('-----------------------------------');

        /**
         * Allow enough time for page to reload
         */
        browser.sleep(timeOut.pageRefreshTimeOut);

        /**
         * Add new user
         */
        element.all(by.css('[data-qa="0001"]')).get(0).sendKeys(userData.FirstName);
        browser.sleep(2000);
        element.all(by.css('[data-qa="0004"]')).get(0).sendKeys(userData.Country);
        browser.sleep(2000);
        element.all(by.css('[data-qa="0002"]')).get(0).sendKeys(userData.LastName);
        browser.sleep(2000);
        element.all(by.css('[data-qa="0003"]')).get(0).sendKeys(userData.EmailAddress);
        browser.sleep(2000);

        browser.refresh();
    };
};

/**
 * Export page object
 * @type {Function}
 */
module.exports = UsersPage;
