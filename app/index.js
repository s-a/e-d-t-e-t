var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
//require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;



app.on('window-all-closed', function() {
	if (process.platform !== 'darwin'){
		app.quit();
	}
});




app.on('ready', function() {

	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		icon: __dirname + '/icon.png',
		transparent: false,
		frame: true,
		'web-preferences' : {
			'experimental-features' : true
		}
	});



	mainWindow.loadUrl('file://' + __dirname + '/index.html');

	mainWindow.maximize();
	mainWindow.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});

