/**
 *
 * Reldens - Skeleton
 *
 * Server initialization and events.
 * This is a test example file on how the server can be initialized.
 *
 */

// required the module:
const { ServerManager } = require('reldens/server');
const path = require('path');
const express = require('express');
// sample override to include a custom behavior on the server:
class ServerOverride extends ServerManager
{
    async createClientBundle()
    {
        // since the bundle is disabled in the .env file (commented RELDENS_PARCEL_RUN_BUNDLER) this will return false:
        super.createClientBundle();
        // then can include for example the files from the generated dist:
        this.app.use('/', express.static(path.join(this.projectRoot, 'dist')));
    }}
// require the custom classes config file:
const { CustomClasses } = require('./theme/packages/server'); // {} // you can pass en empty object.
// you can find an example of the server file in node_modules/reldens/theme/packages/server.js
// create a server instance passing the current root:
let appServer = new ServerOverride({
    projectRoot: __dirname, // we need to pass the server root
    projectTheme: 'custom-game-theme-test', // if the project theme is not specified then "default" will be used
    customClasses: CustomClasses // {} // custom configured custom classes
});
// setup as you need:
appServer.events.on('reldens.serverConfigFeaturesReady', (serverManager, configProcessor) => {
    console.log('INFO - Events test reldens.serverConfigFeaturesReady success!');
});
// run the server!
console.log('Server starting...');
appServer.start().then(() => {
    console.log('INFO - SERVER UP AND RUNNING!');
}).catch((err) => {
    console.log('ERROR - Server error:', err);
});
