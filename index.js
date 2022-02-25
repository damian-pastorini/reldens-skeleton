/**
 *
 * Reldens - NPM Test
 *
 * Server initialization and events.
 * This is a test example file on how the server can be initialized.
 *
 */

// required the module:
const { ServerManager } = require('reldens/server');
// require the custom classes config file:
const { CustomClasses } = require('./theme/packages/server'); // {} // you can pass en empty object.
// you can find an example of the server file in node_modules/reldens/theme/packages/server.js
// create a server instance passing the current root:
let appServer = new ServerManager({
    projectRoot: __dirname, // we need to pass the server root
    projectThemeName: 'custom-game-theme-test', // if the project theme is not specified then "default" will be used
    customClasses: CustomClasses // {} // custom configured custom classes
});
console.log('TEST - All these are TEST logs that you can remove from your index file.');
// events debug:
// appServer.events.debug = 'all'; // or any string containing multiple events keys.
// setup as you need:
// eslint-disable-next-line no-unused-vars
appServer.events.on('reldens.serverConfigFeaturesReady', (props) => {
    console.log('TEST - Events test reldens.serverConfigFeaturesReady success!');
});
appServer.events.on('reldens.beforeCreateAdminManager', (adminPack, dispatchedEvent) => {
    for(let adminResource of dispatchedEvent.serverManager.dataServer.resources){
        console.log('DEMO - Hardcoded event to disable CRUD for: '+ adminResource.resource.model.rawName);
        adminResource.resource.model.create = (params) => { return true; };
        adminResource.resource.model.createWithRelations = (params, relations) => { return true; };
        adminResource.resource.model.update = (filters, updatePatch) => { return true; };
        adminResource.resource.model.updateBy = (field, fieldValue, updatePatch, operator = null) => { return true; };
        adminResource.resource.model.updateById = (id, params) => { return true; };
        adminResource.resource.model.delete = (filters) => { return true; };
        adminResource.resource.model.deleteById = (id) => { return true; };
    }
});
// run the server!
console.log('TEST - Server starting...');
appServer.start().then(() => {
    console.log('TEST - SERVER UP AND RUNNING!');
}).catch((err) => {
    console.log('TEST - Server error:', err);
    process.exit();
});
