var appDef = require('../erbgServices/appDef.js');

function getImage(img) {
  switch (img[0]) {
    case 0:
      {
        return img[1];
      }
      break;
    case 1:
      {
        return appDef.RootUrl + "/images/" + img[1] + ".jpg";
      }
      break;
    default:
      {
        return "static/images/ic_menu_sort_nor.png";
      }
      break;
  }
}

module.exports = 
{
  getImage: getImage
}