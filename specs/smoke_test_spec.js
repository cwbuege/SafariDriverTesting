'use strict';

/**
 * Page object exports
 * The files are located in the 'pages' folder
 */
var LoginPage = require('../pages/login.page.js');
var AssetsPage = require('../pages/assets.page.js');
var GroupsPage = require('../pages/groups.page.js');
var ProjectsPage = require('../pages/projects.page.js');
var UsersPage = require('../pages/users.page.js');
var LocationsPage = require('../pages/locations.page.js');
var ZonesPage = require('../pages/zones.page.js');
var DealersControllerPage = require('../pages/dealersController.page.js');
var CustomersControllerPage = require('../pages/customersController.page.js');
var ReportsPage = require('../pages/reports.page.js');
var AlertsPage = require('../pages/alerts.page.js');
var DriversPage = require('../pages/drivers.page.js');
// Maintenance Section
var MaintSchedulesPage = require('../pages/maint-schedules.page.js');
var MaintPlansPage = require('../pages/maint-plans.page.js');
var MaintTasksPage = require('../pages/maint-tasks.page.js');
var MaintLogsPage = require('../pages/maint-logs.page.js');
var MaintStatusOdometerPage = require('../pages/maint-status-odometer.page.js');
var MaintStatusEngineHoursPage = require('../pages/maint-status-engine-hours.page.js');
var MaintStatusTimePage = require('../pages/maint-status-time.page.js');
var MaintStatusEngineHoursFOnPOnlyPage = require('../pages/maint-status-engine-hours-fon-ponly.page.js');
var MaintStatusOdometerFOnPOnlyPage = require('../pages/maint-status-odometer-fon-ponly.page.js');
var MaintStatusTimeFOnPOnlyPage = require('../pages/maint-status-time-fon-ponly.page.js');
var MaintStatusEngineHoursFOffPOnlyPage = require('../pages/maint-status-engine-hours-foff-ponly.page.js');
var MaintStatusOdometerFOffPOnlyPage = require('../pages/maint-status-odometer-foff-ponly.page.js');
var MaintStatusTimeFOffPOnlyPage = require('../pages/maint-status-time-foff-ponly.page.js');
var MaintStatusEngineHoursFOffAddLogPage = require('../pages/maint-status-engine-hours-foff-addlog.page.js');
var MaintStatusEngineHoursFOnAddLogPage = require('../pages/maint-status-engine-hours-fon-addlog.page.js');
var MaintStatusEngineHoursFOnAddLogAddSchedPage = require('../pages/maint-status-engine-hours-fon-addlog-addsched.page.js');
var MaintStatusOdometerFOffAddLogPage = require('../pages/maint-status-odometer-foff-addlog.page.js');
var MaintStatusOdometerFOnAddLogPage = require('../pages/maint-status-odometer-fon-addlog.page.js');
var MaintStatusOdometerFOnAddLogAddSchedPage = require('../pages/maint-status-odometer-fon-addlog-addsched.page.js');
var MaintStatusTimeFOffAddLogPage = require('../pages/maint-status-time-foff-addlog.page.js');
var MaintStatusTimeFOnAddLogPage = require('../pages/maint-status-time-fon-addlog.page.js');
var MaintStatusTimeFOnAddLogAddSchedPage = require('../pages/maint-status-time-fon-addlog-addsched.page.js');
var AccordionPage = require('../pages/accordion.page.js');
// var SingleSignOnELDPage = require('../pages/sso-eld.page.js');
var CamerasControllerPage = require('../pages/camerasController.page.js');

/**
 * Page object instantiation
 */
var loginPage = new LoginPage();
var assetsPage = new AssetsPage();
var groupsPage = new GroupsPage();
var projectsPage = new ProjectsPage();
var usersPage = new UsersPage();
var locationsPage = new LocationsPage();
var zonesPage = new ZonesPage();
var dealersControllerPage = new DealersControllerPage();
var customersControllerPage = new CustomersControllerPage();
var reportsPage = new ReportsPage();
var alertsPage = new AlertsPage();
var driversPage = new DriversPage();
// Maintenance Section
var maintSchedulesPage = new MaintSchedulesPage();
var maintPlansPage = new MaintPlansPage();
var maintTasksPage = new MaintTasksPage();
var maintLogsPage = new MaintLogsPage();
var maintStatusOdometerPage = new MaintStatusOdometerPage();
var maintStatusEngineHoursPage = new MaintStatusEngineHoursPage();
var maintStatusTimePage = new MaintStatusTimePage();
var maintStatusEngineHoursFOnPOnlyPage = new MaintStatusEngineHoursFOnPOnlyPage();
var maintStatusOdometerFOnPOnlyPage = new MaintStatusOdometerFOnPOnlyPage();
var maintStatusTimeFOnPOnlyPage = new MaintStatusTimeFOnPOnlyPage();
var maintStatusEngineHoursFOffPOnlyPage = new MaintStatusEngineHoursFOffPOnlyPage();
var maintStatusOdometerFOffPOnlyPage = new MaintStatusOdometerFOffPOnlyPage();
var maintStatusTimeFOffPOnlyPage = new MaintStatusTimeFOffPOnlyPage();
var maintStatusEngineHoursFOffAddLogPage = new MaintStatusEngineHoursFOffAddLogPage();
var maintStatusEngineHoursFOnAddLogPage = new MaintStatusEngineHoursFOnAddLogPage();
var maintStatusEngineHoursFOnAddLogAddSchedPage = new MaintStatusEngineHoursFOnAddLogAddSchedPage();
var maintStatusOdometerFOffAddLogPage = new MaintStatusOdometerFOffAddLogPage();
var maintStatusOdometerFOnAddLogPage = new MaintStatusOdometerFOnAddLogPage();
var maintStatusOdometerFOnAddLogAddSchedPage = new MaintStatusOdometerFOnAddLogAddSchedPage();
var maintStatusTimeFOffAddLogPage = new MaintStatusTimeFOffAddLogPage();
var maintStatusTimeFOnAddLogPage = new MaintStatusTimeFOnAddLogPage();
var maintStatusTimeFOnAddLogAddSchedPage = new MaintStatusTimeFOnAddLogAddSchedPage();
var accordionPage = new AccordionPage();
// var singleSignOnELDPage = new SingleSignOnELDPage();
var camerasControllerPage = new CamerasControllerPage();

/**
 * Test data exports
 * The files are located in the 'data' folder
 */
var loginData = require('../data/login.json');
var assetsData = require('../data/assets.json');
var groupsData = require('../data/groups.json');
var projectsData = require('../data/projects.json');
var usersData = require('../data/users.json');
var locationsData = require('../data/locations.json');
var zonesData = require('../data/zones.json');
var dealersData = require('../data/dealers.json');
var customersData = require('../data/customers.json');
var reportsData = require('../data/reports.json');
var alertsData = require('../data/alerts.json');
//Maintenance Section
var maintSchedulesData = require('../data/maint-schedules.json');
var maintPlansData = require('../data/maint-plans.json');
var maintTasksData = require('../data/maint-tasks.json');
var maintLogsData = require('../data/maint-logs.json');
// May be unnecessary as no CRUD actions exist within Status
var maintStatusOdometerData = require('../data/maint-status-odometer.json');
var maintStatusEngineHoursData = require('../data/maint-status-engine-hours.json');
var maintStatusTimeData = require('../data/maint-status-time.json');
// var singleSignOnELDData = require('../data/sso-eld.json');

/*
 * Boolean variables to control test execution
 */
var bInvalidLogin;                                      // Function:  loginPage.invalidLogin
var bValidLogin;                                        // Function:  loginPage.login
var bGenerateReport;                                    // Function:  reportsPage.generateReport
var bCRUDAsset;                                         // Function:  assetsPage.CRUDAsset
var bCRUDGroup;                                         // Function:  groupsPage.CRUDGroup
var bCRUDProject;                                       // Function:  projectsPage.CRUDProject
var bCRUDUser;                                          // Function:  usersPage.CRUDUser
var bCRUDLocations;                                     // Function:  locationsPage.CRUDLocations
var bCRUDZones;                                         // Function:  zonesPage.CRUDZones
var bCRUDSensors;                                       // Function:  To Be Developed
var bDealerTests;                                       // Function:  All Dealer tests
var bCustomerTests;                                     // Function:  All Customer tests
var bCRUDAlerts;                                        // Function:  alertsPage.CRUDAlerts
var bCRUDDrivers;                                       // Function:  driversPage.CRUDDrivers
var bAddAssetToDriver;                                  // Function:  driversPage.addAssetToDriver
var bReassignAssetAfterDeletion;                        // Function:  driversPage.reassignAssetAfterDeletion
var bGenerateMaintSchedules;                            // Function:  maintSchedulesPage.generateMaintSchedules
var bGenerateMaintPlans;                                // Function:  maintPlansPage.generateMaintPlans
var bGenerateMaintTasks;                                // Function:  maintTasksPage.generateMaintTasks
var bGenerateMaintLogs;                                 // Function:  maintLogsPage.generateMaintLogs
var bGenerateMaintStatusEngineHours;                    // Function:  maintStatusEngineHoursPage.generateMaintStatusEngineHours
var bGenerateMaintStatusEngineHoursFOffPOnly;           // Function:  maintStatusEngineHoursFOffPOnlyPage.generateMaintStatusEngineHoursFOffPOnly
var bGenerateMaintStatusEngineHoursFOnPOnly;            // Function:  maintStatusEngineHoursFOnPOnlyPage.generateMaintStatusEngineHoursFOnPOnly
var bGenerateMaintStatusEngineHoursFOffAddLog;          // Function:  maintStatusEngineHoursFOffAddLogPage.generateMaintStatusEngineHoursFOffAddLog
var bGenerateMaintStatusEngineHoursFOnAddLog;           // Function:  maintStatusEngineHoursFOnAddLogPage.generateMaintStatusEngineHoursFOnAddLog
var bGenerateMaintStatusEngineHoursFOnAddLogAddSched;   // Function:  maintStatusEngineHoursFOnAddLogAddSchedPage.generateMaintStatusEngineHoursFOnAddLogAddSched
var bGenerateMaintStatusOdometer;                       // Function:  maintStatusOdometerPage.generateMaintStatusOdometer
var bGenerateMaintStatusOdometerFOffPOnly;              // Function:  maintStatusOdometerFOffPOnlyPage.generateMaintStatusOdometerFOffPOnly
var bGenerateMaintStatusOdometerFOnPOnly;               // Function:  maintStatusOdometerFOnPOnlyPage.generateMaintStatusOdometerFOnPOnly
var bGenerateMaintStatusOdometerFOffAddLog;             // Function:  maintStatusOdometerFOffAddLogPage.generateMaintStatusOdometerFOffAddLog
var bGenerateMaintStatusOdometerFOnAddLog;              // Function:  maintStatusOdometerFOnAddLogPage.generateMaintStatusOdometerFOnAddLog
var bGenerateMaintStatusOdometerFOnAddLogAddSched;      // Function:  maintStatusOdometerFOnAddLogAddSchedPage.generateMaintStatusOdometerFOnAddLogAddSched
var bGenerateMaintStatusTime;                           // Function:  maintStatusTimePage.generateMaintStatusTime
var bGenerateMaintStatusTimeFOffPOnly;                  // Function:  maintStatusTimeFOffPOnlyPage.generateMaintStatusTimeFOffPOnly
var bGenerateMaintStatusTimeFOnPOnly;                   // Function:  maintStatusTimeFOnPOnlyPage.generateMaintStatusTimeFOnPOnly
var bGenerateMaintStatusTimeFOffAddLog;                 // Function:  maintStatusTimeFOffAddLogPage.generateMaintStatusTimeFOffAddLog
var bGenerateMaintStatusTimeFOnAddLog;                  // Function:  maintStatusTimeFOnAddLogPage.generateMaintStatusTimeFOnAddLog
var bGenerateMaintStatusTimeFOnAddLogAddSched;          // Function:  maintStatusTimeFOnAddLogAddSchedPage.generateMaintStatusTimeFOnAddLogAddSched
var bAccordionOneToTwo;                                 // Function:  accordionOneToTwo
var bAccordionOneCloseTwo;                              // Function:  accordionOneCloseTwo
var bCameraTests;                                       // Function:  All Camera tests
var bLogout;                                            // Function:  loginPage.logout
// var bSingleSignOnELDLoginTest;                          // Function:  singleSignOnELDLoginTest
// var bSingleSignOnELDLoginTestNoNav;                     // Function:  singleSignOnELDLoginTestNoNav
var bAllReportsTest;                                    // Function:  allReportsTest

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
// Original Line -  browser.refresh();
        browser.ignoreSynchronization = true;
        browser.refresh();
    });

    /**
     * Close the browser window after all tests have been executed
     */
    afterAll(function() {
        browser.close();
    });

    switch (browser.params.tests) {
        case 'camera-tests':
            bValidLogin = true;
            bCameraTests = true;
            bLogout = true;
            break;

        case 'all-reports':
            bValidLogin = true;
            bAllReportsTest = true;
            bLogout = true;
            break;

        case 'working':
//            bInvalidLogin = true;
            bValidLogin = true;

//            bGenerateReport = true;
            bCRUDAsset = true;    // Bob working on the API call fix
//            bCRUDGroup = true;
//            bCRUDProject = true;
//            bCRUDUser = true;
//            bCRUDLocations = true;
//            bCRUDZones = true;
// Unused            bCRUDSensors = true;
//            bDealerTests = true;
//            bCustomerTests = true;
//            bCRUDAlerts = true;

            // Drivers
//            bCRUDDrivers = true;
//            bAddAssetToDriver = true;
//            bReassignAssetAfterDeletion = true;

//            bGenerateMaintSchedules = true;
//            bGenerateMaintPlans = true;     // Problem - change the 'expect' on line 97 to be a 'then' to catch the value in the card
//            bGenerateMaintTasks = true;
//            bGenerateMaintLogs = true;

            // Engine Hours
//            bGenerateMaintStatusEngineHours = true;   // Asset addition
//            bGenerateMaintStatusEngineHoursFOffPOnly = true;
//            bGenerateMaintStatusEngineHoursFOnPOnly = true;
//            bGenerateMaintStatusEngineHoursFOffAddLog = true;
//            bGenerateMaintStatusEngineHoursFOnAddLog = true;
//            bGenerateMaintStatusEngineHoursFOnAddLogAddSched = true;

            // Odometer
//            bGenerateMaintStatusOdometer = true;
//            bGenerateMaintStatusOdometerFOffPOnly = true;
//            bGenerateMaintStatusOdometerFOnPOnly = true;
//            bGenerateMaintStatusOdometerFOffAddLog = true;      // isPresent test for making sure the button was clicked
//            bGenerateMaintStatusOdometerFOnAddLog = true;
//            bGenerateMaintStatusOdometerFOnAddLogAddSched = true;

            // Time
//            bGenerateMaintStatusTime = true;
//            bGenerateMaintStatusTimeFOffPOnly = true;
//            bGenerateMaintStatusTimeFOnPOnly = true;
//            bGenerateMaintStatusTimeFOffAddLog = true;

// Continue here with Edge testing.

//            bGenerateMaintStatusTimeFOnAddLog = true;
//            bGenerateMaintStatusTimeFOnAddLogAddSched = true;

//            bAccordionOneToTwo = true;
//            bAccordionOneCloseTwo = true;

//            bCameraTests = true;

//            bAllReportsTest = true;

            bLogout = true;
            break;

        case 'quick-test':
            bValidLogin = true;
            bGenerateReport = true;
            bCRUDAsset = true;
            bCRUDGroup = true;
            bCRUDProject = true;
            bCRUDUser = true;
            bCRUDLocations = true;
            bLogout = true;
            break;

        case 'login-only':
            bInvalidLogin = true;
            bValidLogin = true;
            bLogout = true;
            break;

        case 'all':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bInvalidLogin = true;
            bValidLogin = true;
            bGenerateReport = true;
            bCRUDAsset = true;
            bCRUDGroup = true;
            bCRUDProject = true;
            bCRUDUser = true;
            bCRUDLocations = true;
            bCRUDZones = true;
            bCRUDSensors = true;
            bDealerTests = true;
            bCustomerTests = true;
            bCRUDAlerts = true;

            // Drivers
            bCRUDDrivers = true;
            bAddAssetToDriver = true;
            bReassignAssetAfterDeletion = true;

            bGenerateMaintSchedules = true;
            bGenerateMaintPlans = true;
            bGenerateMaintTasks = true;
            bGenerateMaintLogs = true;

            // Engine Hours
            bGenerateMaintStatusEngineHours = true;
            bGenerateMaintStatusEngineHoursFOffPOnly = true;
            bGenerateMaintStatusEngineHoursFOnPOnly = true;

            bGenerateMaintStatusEngineHoursFOffAddLog = true;
            bGenerateMaintStatusEngineHoursFOnAddLog = true;
            bGenerateMaintStatusEngineHoursFOnAddLogAddSched = true;

            // Odometer
            bGenerateMaintStatusOdometer = true;
            bGenerateMaintStatusOdometerFOffPOnly = true;
            bGenerateMaintStatusOdometerFOnPOnly = true;

            bGenerateMaintStatusOdometerFOffAddLog = true;
            bGenerateMaintStatusOdometerFOnAddLog = true;
            bGenerateMaintStatusOdometerFOnAddLogAddSched = true;

            // Time
            bGenerateMaintStatusTime = true;
            bGenerateMaintStatusTimeFOffPOnly = true;
            bGenerateMaintStatusTimeFOnPOnly = true;

            bGenerateMaintStatusTimeFOffAddLog = true;
            bGenerateMaintStatusTimeFOnAddLog = true;
            bGenerateMaintStatusTimeFOnAddLogAddSched = true;

            bAccordionOneToTwo = true;
            bAccordionOneCloseTwo = true;

            bCameraTests = true;

            bAllReportsTest = true;

            bLogout = true;

//            bSingleSignOnELDLoginTest = true;
//            bSingleSignOnELDLoginTestNoNav = true;

            break;

        case 'all-1':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bInvalidLogin = true;
            bValidLogin = true;
            bGenerateReport = true;
            bCRUDAsset = true;
            bCRUDGroup = true;
            bCRUDProject = true;
            bCRUDUser = true;
            bCRUDLocations = true;
            bCRUDZones = true;
            bCRUDSensors = true;
            bDealerTests = true;
            bCustomerTests = true;
            bCRUDAlerts = true;

            bLogout = true;

            break;

        case 'all-2':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bValidLogin = true;

            // Drivers
            bCRUDDrivers = true;
            bAddAssetToDriver = true;
            bReassignAssetAfterDeletion = true;

            // Simple Maintenance Tests
            bGenerateMaintSchedules = true;
            bGenerateMaintPlans = true;
            bGenerateMaintTasks = true;
            bGenerateMaintLogs = true;

            bLogout = true;

            break;

        case 'all-3':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bValidLogin = true;

            // Engine Hours
            bGenerateMaintStatusEngineHours = true;
            bGenerateMaintStatusEngineHoursFOffPOnly = true;
            bGenerateMaintStatusEngineHoursFOnPOnly = true;

            bGenerateMaintStatusEngineHoursFOffAddLog = true;
            bGenerateMaintStatusEngineHoursFOnAddLog = true;
            bGenerateMaintStatusEngineHoursFOnAddLogAddSched = true;

            bLogout = true;

            break;

        case 'all-4':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bValidLogin = true;

            // Odometer
            bGenerateMaintStatusOdometer = true;
            bGenerateMaintStatusOdometerFOffPOnly = true;
            bGenerateMaintStatusOdometerFOnPOnly = true;

            bGenerateMaintStatusOdometerFOffAddLog = true;
            bGenerateMaintStatusOdometerFOnAddLog = true;
            bGenerateMaintStatusOdometerFOnAddLogAddSched = true;

            bLogout = true;

            break;

        case 'all-5':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bValidLogin = true;

            // Time
            bGenerateMaintStatusTime = true;
            bGenerateMaintStatusTimeFOffPOnly = true;
            bGenerateMaintStatusTimeFOnPOnly = true;

            bGenerateMaintStatusTimeFOffAddLog = true;
            bGenerateMaintStatusTimeFOnAddLog = true;
            bGenerateMaintStatusTimeFOnAddLogAddSched = true;

            bLogout = true;

            break;

        case 'all-6':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bValidLogin = true;

            bAllReportsTest = true;

            bLogout = true;

            break;

        case 'all-7':
            // This list is the 'master' of the sequence of the tests.
            // All booleans in here must match the order within 'smoke_test_spec.js'.

            bValidLogin = true;

            bAccordionOneToTwo = true;
            bAccordionOneCloseTwo = true;

            bCameraTests = true;

            bLogout = true;

//            bSingleSignOnELDLoginTest = true;
//            bSingleSignOnELDLoginTestNoNav = true;

            break;

    }

    if (bInvalidLogin) {
        it('should display login error if credentials are invalid ~~invalidLogin~~', function () {
            browser.get(browser.params.stackURL);
            loginPage.invalidLogin(loginData.invalidUsername, loginData.invalidPassword);
        });
    }

    if (bValidLogin) {
        it('should direct user to dashboard page if logged in with valid credentials ~~login~~', function () {
            browser.get(browser.params.stackURL);
            loginPage.login(browser.params.username, browser.params.password);
        });
    }

    if (bGenerateReport) {
        it('should display report generation option in a new browser window - ~~generateReport~~', function () {
            reportsPage.generateReport(reportsData.report_type);
        });
    }

    if (bCRUDAsset) {
        it('should be able to perform CRUD operations on asset ~~CRUDAsset~~', function () {
            assetsPage.CRUDAsset(assetsData.asset_name, assetsData.timezone);
        });
    }

    if (bCRUDGroup) {
        it('should be able to perform CRUD operations on group ~~CRUDGroup~~', function () {
            groupsPage.CRUDGroup(groupsData.group_name);
        });
    }

    if (bCRUDProject) {
        it('should be able to perform CRUD operations on project ~~CRUDProject~~', function () {
            projectsPage.CRUDProject(projectsData.project_name);
        });
    }

    if (bCRUDUser) {
        it('should be able to perform CRUD operations on user ~~CRUDUser~~', function () {
            usersPage.CRUDUser(usersData.firstName, usersData.lastName, usersData.email, usersData.timezone, usersData.lastName2);
        });
    }

    if (bCRUDLocations) {
        it('should be able to perform CRUD operations on location ~~CRUDLocations~~', function () {
            locationsPage.CRUDLocations(locationsData.location_name, locationsData.address);
        });
    }

    if (bCRUDZones) {
        it('should be able to perform CRUD operations on zone ~~CRUDZones~~', function () {
            zonesPage.CRUDZones(zonesData.zone_name);
        });
    }

    /*
     * Not Working at all yet
     */
    if (bCRUDSensors) {
        it('should be able to perform CRUD operations on sensor ~~NoFunctionDefined~~', function () {
            /**
             * functionality to add/update sensor not available
             */
        });
    }

//    if (bCRUDDealers) {
    /**
     * Test to check Dealership CRUD actions
     * Status:  Working
     */
//        it('should be able to perform CRUD operations on dealer', function () {
    // This test can't be done for the ID we are using in MCTest
//            dealersPage.CRUDDealers(dealersData.dealer_name);
//        });
//    }

    if (bDealerTests) {
        /**
         * Test to check Dealership CRUD actions
         * Status:  Under Development
         */
        it('should perform Dealer tests depending on menu visibility ~~allDealerTests~~', function () {
            dealersControllerPage.allDealerTests(dealersData.dealer_name);
        });
    }

    if (bCustomerTests) {
        /**
         * Test to check Customer CRUD actions
         * Status:  Under Development
         */
        it('should perform Customer tests depending on menu visibility ~~allCustomerTests~~', function () {
            customersControllerPage.allCustomerTests(customersData.customer_name);
        });
    }

    if (bCRUDAlerts) {
        /**
         * Test to check Alert CRUD actions
         * Status:  Working
         */
        it('should be able to perform CRUD operations on alert ~~CRUDAlerts~~', function () {
            alertsPage.CRUDAlerts(alertsData.alert_name, alertsData.alert_type, alertsData.alert_speed, alertsData.alert_applies);
        });
    }

    if (bCRUDDrivers) {
        /**
         * Test to check Driver CRUD actions
         * Status:  Working
         */
        it('should be able to perform CRUD operations on drivers ~~CRUDDrivers~~', function () {
            driversPage.CRUDDrivers();
        });
    }

    if (bAddAssetToDriver) {
        /**
         * Test to check Driver CRUD actions
         * Status:  Working
         */
        it('should be able to create a driver and add an asset to the driver. ~~addAssetToDriver~~', function () {
            driversPage.addAssetToDriver();
        });
    }

    if (bReassignAssetAfterDeletion) {
        /**
         * Test to check Driver CRUD actions
         * Status:  Working
         */
        it('should be able to reassign an asset after a driver is deleted with a previously assigned asset. ~~reassignAssetAfterDeletion~~', function () {
            driversPage.reassignAssetAfterDeletion();
        });
    }

    if (bGenerateMaintSchedules) {
        /**
         * Test to check Maintenance -> Schedules Page
         * Status:  Working
         */
        it('should load the Maintenance -> Schedules page in a new tab and perform CRUD tests ~~generateMaintSchedules~~', function () {
            maintSchedulesPage.generateMaintSchedules(maintSchedulesData.maint_schedule_name, maintSchedulesData.maint_schedule_desc);
        });
    }

    if (bGenerateMaintPlans) {
        /**
         * Test to check Maintenance -> Plans Page
         * Status:  Working
         */
        it('should load the Maintenance -> Plans page in a new tab and perform CRUD tests ~~generateMaintPlans~~', function () {
            maintPlansPage.generateMaintPlans(maintPlansData.maint_plan_name, maintPlansData.maint_plan_desc);
        });
    }

    if (bGenerateMaintTasks) {
        /**
         * Test to check Maintenance -> Tasks Page
         * Status:  Working
         */
        it('should load the Maintenance -> Tasks page in a new tab and perform CRUD tests ~~generateMaintTasks~~', function () {
            maintTasksPage.generateMaintTasks(maintTasksData.maint_task_type, maintTasksData.maint_task_name);
        });
    }

    if (bGenerateMaintLogs) {
        /**
         * Test to check Maintenance -> Logs Page
         * Status:  Working
         */
        it('should load the Maintenance -> Logs page in a new tab and perform CRUD tests ~~generateMaintLogs~~', function () {
            maintLogsPage.generateMaintLogs(maintLogsData.maint_log_name, maintLogsData.maint_log_desc, maintLogsData.log_asset_name, maintLogsData.log_asset_desc, maintLogsData.log_sched_name, maintLogsData.log_sched_desc, assetsData.timezone, maintLogsData.log_plan_name, maintLogsData.log_plan_desc);
        });
    }

    // -----------------------------------------------------------------------------
    // Maintenance -> Status -> Engine Hour Testing
    // -----------------------------------------------------------------------------

    if (bGenerateMaintStatusEngineHours) {
        /**
         * Test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan AND Schedule generated
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan AND Schedule generated ~~generateMaintStatusEngineHours~~', function () {
            maintStatusEngineHoursPage.generateMaintStatusEngineHours(maintStatusEngineHoursData.maint_log_name, maintStatusEngineHoursData.maint_log_desc, maintStatusEngineHoursData.log_asset_name, maintStatusEngineHoursData.log_asset_desc, maintStatusEngineHoursData.log_sched_name, maintStatusEngineHoursData.log_sched_desc, maintStatusEngineHoursData.timezone, maintStatusEngineHoursData.log_plan_name, maintStatusEngineHoursData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusEngineHoursFOffPOnly) {
        /**
         * Test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule ~~generateMaintStatusEngineHoursFOffPOnly~~', function () {
            maintStatusEngineHoursFOffPOnlyPage.generateMaintStatusEngineHoursFOffPOnly(maintStatusEngineHoursData.maint_log_name, maintStatusEngineHoursData.maint_log_desc, maintStatusEngineHoursData.log_asset_name, maintStatusEngineHoursData.log_asset_desc, maintStatusEngineHoursData.timezone, maintStatusEngineHoursData.log_plan_name, maintStatusEngineHoursData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusEngineHoursFOnPOnly) {
        /**
         * Test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule ~~generateMaintStatusEngineHoursFOnPOnly~~', function () {
            maintStatusEngineHoursFOnPOnlyPage.generateMaintStatusEngineHoursFOnPOnly(maintStatusEngineHoursData.maint_log_name, maintStatusEngineHoursData.maint_log_desc, maintStatusEngineHoursData.log_asset_name, maintStatusEngineHoursData.log_asset_desc, maintStatusEngineHoursData.timezone, maintStatusEngineHoursData.log_plan_name, maintStatusEngineHoursData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusEngineHoursFOffAddLog) {
        /**
         * Test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusEngineHoursFOffAddLog~~', function () {
            maintStatusEngineHoursFOffAddLogPage.generateMaintStatusEngineHoursFOffAddLog(maintStatusEngineHoursData.maint_log_name, maintStatusEngineHoursData.maint_log_desc, maintStatusEngineHoursData.log_asset_name, maintStatusEngineHoursData.log_asset_desc, maintStatusEngineHoursData.timezone, maintStatusEngineHoursData.log_plan_name, maintStatusEngineHoursData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusEngineHoursFOnAddLog) {
        /**
         * Test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusEngineHoursFOnAddLog~~', function () {
            maintStatusEngineHoursFOnAddLogPage.generateMaintStatusEngineHoursFOnAddLog(maintStatusEngineHoursData.maint_log_name, maintStatusEngineHoursData.maint_log_desc, maintStatusEngineHoursData.log_asset_name, maintStatusEngineHoursData.log_asset_desc, maintStatusEngineHoursData.timezone, maintStatusEngineHoursData.log_plan_name, maintStatusEngineHoursData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusEngineHoursFOnAddLogAddSched) {
        /**
         * Test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, Add Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Engine Hours generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, Add Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusEngineHoursFOnAddLogAddSched~~', function () {
            maintStatusEngineHoursFOnAddLogAddSchedPage.generateMaintStatusEngineHoursFOnAddLogAddSched(maintStatusEngineHoursData.maint_log_name, maintStatusEngineHoursData.maint_log_desc, maintStatusEngineHoursData.log_asset_name, maintStatusEngineHoursData.log_asset_desc, maintStatusEngineHoursData.timezone, maintStatusEngineHoursData.log_plan_name, maintStatusEngineHoursData.log_plan_desc, maintStatusEngineHoursData.log_sched_name, maintStatusEngineHoursData.log_sched_desc);
        });
    }

    // -----------------------------------------------------------------------------
    // Maintenance -> Status -> Odometer Testing
    // -----------------------------------------------------------------------------

    if (bGenerateMaintStatusOdometer) {
        /**
         * Test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan AND Schedule generated
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan AND Schedule generated ~~generateMaintStatusOdometer~~', function () {
            maintStatusOdometerPage.generateMaintStatusOdometer(maintStatusOdometerData.maint_log_name, maintStatusOdometerData.maint_log_desc, maintStatusOdometerData.log_asset_name, maintStatusOdometerData.log_asset_desc, maintStatusOdometerData.log_sched_name, maintStatusOdometerData.log_sched_desc, maintStatusOdometerData.timezone, maintStatusOdometerData.log_plan_name, maintStatusOdometerData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusOdometerFOffPOnly) {
        /**
         * Test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule ~~generateMaintStatusOdometerFOffPOnly~~', function () {
            maintStatusOdometerFOffPOnlyPage.generateMaintStatusOdometerFOffPOnly(maintStatusOdometerData.maint_log_name, maintStatusOdometerData.maint_log_desc, maintStatusOdometerData.log_asset_name, maintStatusOdometerData.log_asset_desc, maintStatusOdometerData.timezone, maintStatusOdometerData.log_plan_name, maintStatusOdometerData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusOdometerFOnPOnly) {
        /**
         * Test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule ~~generateMaintStatusOdometerFOnPOnly~~', function () {
            maintStatusOdometerFOnPOnlyPage.generateMaintStatusOdometerFOnPOnly(maintStatusOdometerData.maint_log_name, maintStatusOdometerData.maint_log_desc, maintStatusOdometerData.log_asset_name, maintStatusOdometerData.log_asset_desc, maintStatusOdometerData.timezone, maintStatusOdometerData.log_plan_name, maintStatusOdometerData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusOdometerFOffAddLog) {
        /**
         * Test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusOdometerFOffAddLog~~', function () {
            maintStatusOdometerFOffAddLogPage.generateMaintStatusOdometerFOffAddLog(maintStatusOdometerData.maint_log_name, maintStatusOdometerData.maint_log_desc, maintStatusOdometerData.log_asset_name, maintStatusOdometerData.log_asset_desc, maintStatusOdometerData.timezone, maintStatusOdometerData.log_plan_name, maintStatusOdometerData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusOdometerFOnAddLog) {
        /**
         * Test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusOdometerFOnAddLog~~', function () {
            maintStatusOdometerFOnAddLogPage.generateMaintStatusOdometerFOnAddLog(maintStatusOdometerData.maint_log_name, maintStatusOdometerData.maint_log_desc, maintStatusOdometerData.log_asset_name, maintStatusOdometerData.log_asset_desc, maintStatusOdometerData.timezone, maintStatusOdometerData.log_plan_name, maintStatusOdometerData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusOdometerFOnAddLogAddSched) {
        /**
         * Test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, Add Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Odometer generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, Add Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusOdometerFOnAddLogAddSched~~', function () {
            maintStatusOdometerFOnAddLogAddSchedPage.generateMaintStatusOdometerFOnAddLogAddSched(maintStatusOdometerData.maint_log_name, maintStatusOdometerData.maint_log_desc, maintStatusOdometerData.log_asset_name, maintStatusOdometerData.log_asset_desc, maintStatusOdometerData.timezone, maintStatusOdometerData.log_plan_name, maintStatusOdometerData.log_plan_desc, maintStatusOdometerData.log_sched_name, maintStatusOdometerData.log_sched_desc);
        });
    }

    // -----------------------------------------------------------------------------
    // Maintenance -> Status -> Time Testing
    // -----------------------------------------------------------------------------

    if (bGenerateMaintStatusTime) {
        /**
         * Test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan AND Schedule generated
         * Status: Working
         */
        it('should perform test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan AND Schedule generated ~~generateMaintStatusTime~~', function () {
            maintStatusTimePage.generateMaintStatusTime(maintStatusTimeData.maint_log_name, maintStatusTimeData.maint_log_desc, maintStatusTimeData.log_asset_name, maintStatusTimeData.log_asset_desc, maintStatusTimeData.log_sched_name, maintStatusTimeData.log_sched_desc, maintStatusTimeData.timezone, maintStatusTimeData.log_plan_name, maintStatusTimeData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusTimeFOffPOnly) {
        /**
         * Test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule ~~generateMaintStatusTimeFOffPOnly~~', function () {
            maintStatusTimeFOffPOnlyPage.generateMaintStatusTimeFOffPOnly(maintStatusTimeData.maint_log_name, maintStatusTimeData.maint_log_desc, maintStatusTimeData.log_asset_name, maintStatusTimeData.log_asset_desc, maintStatusTimeData.log_sched_name, maintStatusTimeData.log_sched_desc, maintStatusTimeData.timezone, maintStatusTimeData.log_plan_name, maintStatusTimeData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusTimeFOnPOnly) {
        /**
         * Test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule ~~generateMaintStatusTimeFOnPOnly~~', function () {
            maintStatusTimeFOnPOnlyPage.generateMaintStatusTimeFOnPOnly(maintStatusTimeData.maint_log_name, maintStatusTimeData.maint_log_desc, maintStatusTimeData.log_asset_name, maintStatusTimeData.log_asset_desc, maintStatusTimeData.log_sched_name, maintStatusTimeData.log_sched_desc, maintStatusTimeData.timezone, maintStatusTimeData.log_plan_name, maintStatusTimeData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusTimeFOffAddLog) {
        /**
         * Test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval Off, Plan ONLY generated, NO Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusTimeFOffAddLog~~', function () {
            maintStatusTimeFOffAddLogPage.generateMaintStatusTimeFOffAddLog(maintStatusTimeData.maint_log_name, maintStatusTimeData.maint_log_desc, maintStatusTimeData.log_asset_name, maintStatusTimeData.log_asset_desc, maintStatusTimeData.timezone, maintStatusTimeData.log_plan_name, maintStatusTimeData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusTimeFOnAddLog) {
        /**
         * Test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, NO Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusTimeFOnAddLog~~', function () {
            maintStatusTimeFOnAddLogPage.generateMaintStatusTimeFOnAddLog(maintStatusTimeData.maint_log_name, maintStatusTimeData.maint_log_desc, maintStatusTimeData.log_asset_name, maintStatusTimeData.log_asset_desc, maintStatusTimeData.log_sched_name, maintStatusTimeData.log_sched_desc, maintStatusTimeData.timezone, maintStatusTimeData.log_plan_name, maintStatusTimeData.log_plan_desc);
        });
    }

    if (bGenerateMaintStatusTimeFOnAddLogAddSched) {
        /**
         * Test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, Add Schedule,
         * Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen
         * Status:  Working
         */
        it('should perform test to check Maintenance -> Status Page - Time generates green, yellow, and red status messages, Fixed Interval On, Plan ONLY generated, Add Schedule - Validate the Status screen, add a Log adjusting the amount, and re-validate the Status screen ~~generateMaintStatusTimeFOnAddLogAddSched~~', function () {
            maintStatusTimeFOnAddLogAddSchedPage.generateMaintStatusTimeFOnAddLogAddSched(maintStatusTimeData.maint_log_name, maintStatusTimeData.maint_log_desc, maintStatusTimeData.log_asset_name, maintStatusTimeData.log_asset_desc, maintStatusTimeData.log_sched_name, maintStatusTimeData.log_sched_desc, maintStatusTimeData.timezone, maintStatusTimeData.log_plan_name, maintStatusTimeData.log_plan_desc);
        });
    }

    if (bAccordionOneToTwo) {
        /**
         * Test to check the Accordion opening, display first asset, open the pop-up for it, then go directly to second asset
         * Status:  Complete
         */
        it('should display the first asset, open the pop-up for it, then go directly to the second asset and make sure that the pop-up changes properly ~~checkAccordionOneToTwo~~', function () {
            accordionPage.checkAccordionOneToTwo();
        });
    }

    if (bAccordionOneCloseTwo) {
        /**
         * Test to check the Accordion opening, display first asset, open the pop-up for it, close the first asset pop-up, and then load the pop-up for the second asset
         * Status:  Complete
         */
        it('should display the first asset, open the pop-up for it, close the pop-up for the first asset, click on the second asset, and make sure that the pop-up loads properly ~~checkAccordionOneCloseTwo~~', function () {
            accordionPage.checkAccordionOneCloseTwo();
        });
    }

    // Cameras
    if (bCameraTests) {
        /**
         * Test to validate logout functionality
         * This tests clicks on the sign out button on the dashboard page
         * Asserts if the user is correctly returned to the login page
         */
        it('should run all Camera tests ~~allCameraTests~~', function () {
            camerasControllerPage.allCameraTests();
        });
    }

    //  Test for all reports
    if (bAllReportsTest) {
        /***
         * Test to make sure that all reports match their selection to the title on the report
         */
        it('should test all reports to make sure that the report selected is the same as the title on the report', function () {
            reportsPage.allReportsTest(assetsData.asset_name, assetsData.timezone, locationsData.location_name, locationsData.address, groupsData.group_name);
        });
    }

    if (bLogout) {
        /**
         * Test to validate logout functionality
         * This tests clicks on the sign out button on the dashboard page
         * Asserts if the user is correctly returned to the login page
         */
        it('should return user to login page when sign out is clicked ~~logout~~', function () {
            loginPage.logout();
        });
    }

    /*

     Tests are unnecessary at this time - code is commented out in anticipation of future need.

     // Single Sign-On Tests
     if (bSingleSignOnELDLoginTest) {
     */
    /**
     * Test to check for access and implementation of the ELD Login tab on a per-user basis
     * Status:  Complete
     */
    /*
     browser.get(browser.params.stackURL);

     it('should check for access and implementation of the ELD Login tab for user 01. ~~singleSignOnELDLoginTestGood~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestGood(singleSignOnELDData.loginName01, singleSignOnELDData.loginPassword01);
     });

     it('should check for access and implementation of the ELD Login tab for user 02. ~~singleSignOnELDLoginTestGood~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestGood(singleSignOnELDData.loginName02, singleSignOnELDData.loginPassword02);
     });

     it('should check for access and implementation of the ELD Login tab for user 03. ~~singleSignOnELDLoginTestGood~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestGood(singleSignOnELDData.loginName03, singleSignOnELDData.loginPassword03);
     });

     it('should check for access and implementation of the ELD Login tab for user 04. ~~singleSignOnELDLoginTestGood~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestGood(singleSignOnELDData.loginName04, singleSignOnELDData.loginPassword04);
     });

     it('should check for access and implementation of the ELD Login tab for user 05. ~~singleSignOnELDLoginTestGood~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestGood(singleSignOnELDData.loginName05, singleSignOnELDData.loginPassword05);
     });

     it('should check for access and implementation of the ELD Login tab for user 06. ~~singleSignOnELDLoginTestGood~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestGood(singleSignOnELDData.loginName06, singleSignOnELDData.loginPassword06);
     });

     // User does NOT have an account on remote site, but the icon IS in the NavBar
     it('should check for access and implementation of the ELD Login tab for user 06. ~~singleSignOnELDLoginTestBad~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestBad(singleSignOnELDData.loginName07, singleSignOnELDData.loginPassword07);
     });

     }
     */

    /*
     if (bSingleSignOnELDLoginTestNoNav) {
     */
    /**
     * Test to check for access and implementation of the ELD Login tab on a per-user basis
     * Status:  Complete
     */
    /*
     browser.get(browser.params.stackURL);

     it('should check for access and implementation of the ELD Login tab for user 08. ~~singleSignOnELDLoginTestNoNav~~', function () {
     singleSignOnELDPage.singleSignOnELDLoginTestNoNav(singleSignOnELDData.loginName08, singleSignOnELDData.loginPassword08);
     });

     }
     */

});