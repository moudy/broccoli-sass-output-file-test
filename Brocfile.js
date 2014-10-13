
var compileSass = require('broccoli-sass');

var notWorkingOutputFile = 'app.css';
var workingOutputFile = '/app.css';

var appCss = compileSass(['app'], 'app.scss', notWorkingOutputFile);

module.exports = appCss;
