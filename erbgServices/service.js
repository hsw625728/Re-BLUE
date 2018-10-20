var appDef = require('../erbgServices/appDef.js');
var wxToolkit = require('../erbgUtils/wxToolkit.js');

module.exports = 
{
  wxtoolkit: new wxToolkit.wxTookit(appDef.RootUrl, appDef.TokenStr)
}