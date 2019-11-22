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
// create a server instance passing the current root:
let appServer = new ServerManager({projectRoot: __dirname, projectTheme: 'custom-game-theme-test'});
// setup as you need:
appServer.events.on('serverConfigFeaturesReady', (serverManager, configProcessor) => {
    console.log('INFO - Events test serverConfigFeaturesReady success!');
});
// run the server!
console.log('Server starting...');
appServer.start().then(() => {
    console.log('INFO - SERVER UP AND RUNNING!');
}).catch((err) => {
    console.log('ERROR - Server error:', err);
});
