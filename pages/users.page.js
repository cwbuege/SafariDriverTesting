'use strict';

/**
 * Test data exports
 * The files are located in the 'data' folder
 */
var timeOut = require('../data/timeout.json');

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
         * Perform mouse over on the drop down menu item
         */
        element(by.css('[data-qa="10600"]')).click().click();
        browser.sleep(6000);

        /**
         * Launch assets modal
         */
        element(by.css('[data-qa="10601"]')).click();
        browser.sleep(5000);

        /**
         * Add new asset
         */
        element.all(by.css('[data-qa="10601.2"]')).get(0).click();
        browser.sleep(2000);
        var asset = asset_name + new Date().getTime();
        console.log("asset_name = "+asset);
        element(by.name('assetname')).sendKeys(asset);
        browser.sleep(3000);
        element.all(by.name('timezone')).get(0).sendKeys(timezone).sendKeys(protractor.Key.ENTER);
        browser.sleep(2000);
        element.all(by.css('[data-qa="10601.2.39"]')).get(0).click();
        browser.sleep(timeOut.assetCreation);

        /**
         * Search for the asset
         */
        element.all(by.className('input-sm')).get(0).clear();
        browser.sleep(2000);
        element.all(by.className('input-sm')).get(0).sendKeys(asset);
        browser.sleep(3000);
        expect(element.all(by.className('sorting_1')).get(0).getText()).toEqual(asset);

        /**
         * Edit the asset and update the name
         */
        browser.sleep(2000);
        element.all(by.className('glyphicon-pencil')).get(0).click();
        browser.sleep(2000);
        element(by.name('assetname')).clear();
        browser.sleep(2000);
        var asset2 = asset_name + new Date().getTime();
        console.log("asset_name2 = "+asset2);
        element(by.name('assetname')).sendKeys(asset2);
        browser.sleep(3000);
        element.all(by.css('[data-qa="10601.2.39"]')).get(0).click();
        browser.sleep(timeOut.assetCreation);

        /**
         * Search the asset using the new name
         */
        element.all(by.className('input-sm')).get(0).clear();
        browser.sleep(2000);
        element.all(by.className('input-sm')).get(0).sendKeys(asset2);
        browser.sleep(3000);
        expect(element.all(by.className('sorting_1')).get(0).getText()).toEqual(asset2);
        browser.sleep(2000);

        /**
         * Remove the asset
         */
        element.all(by.className('glyphicon-remove-circle')).get(0).click();
        browser.sleep(2000);
        element.all(by.buttonText('Delete')).get(2).click();
        browser.sleep(5000);

        browser.refresh();
    };
};

/**
 * Export page object
 * @type {Function}
 */
module.exports = UsersPage;
