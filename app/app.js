var path= require("path");
var dir = path.join(__dirname, "..", "chrome-devtools-zerodarkmatrix-theme","theme-extension" );
var ext = require('remote').require('browser-window').removeDevToolsExtension("DevTools Theme: Zero Dark Matrix");
console.log(ext);

window.setTimeout(function() {
	ext = require('remote').require('browser-window').addDevToolsExtension(dir);
	console.log(ext);
}, 3000);