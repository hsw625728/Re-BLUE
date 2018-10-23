var appDef = require('../erbgServices/appDef.js');

function getImage(img) {
  if (typeof(img) == "string") {
    return img;
  }
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
    case 2:
      {
        return appDef.ApiImgUrl + "static/img/picture/" + img[1] + ".png";
      }
      break;
    default:
      {
        return "static/images/ic_menu_sort_nor.png";
      }
      break;
  }
}

module.exports = {
  getImage: getImage
}