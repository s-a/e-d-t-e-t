var path= require("path");

var dir = path.join(__dirname, "..", "chrome-devtools-zerodarkmatrix-theme","theme-extension" );
console.info(process.versions.electron);
console.info(dir);
var ext = require('remote').require('browser-window').addDevToolsExtension(dir);