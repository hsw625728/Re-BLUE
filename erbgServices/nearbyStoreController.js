var appDef = require('../erbgServices/appDef.js');
var imageToolkit = require('../erbgServices/imageToolkit.js');
var service = require('../erbgServices/service.js');

//server json
//{
//  addressList: [{ img: [1, "index1"], city: "beijin", name: "某某店", distance: "100km", address: "北京国贸商厦1-4", score: 1-5（数字） }, { img: [2, "index2"], city: "beijin", name: "某某店", distance: "100km", score: 1-5（数字） },],
//  newInfo: []
//}

//view json
//{
//  banner: [{ img: [1, "index1"], city: "beijin", name: "某某店", distance: "100km", address: "北京国贸商厦1-4", score: 1-5（数字） }, { img: [2, "index2"], city: "beijin", name: "某某店", distance: "100km", score: 1-5（数字） },],
//};

/*
function nearbyStoreController(view) {
  this.serviceUrl = appDef.RootUrl + "/search";
  this.data = {
    addressList: []
  };
}

nearbyStoreController.prototype.onLoad = function (options, callback) {
  let that = this;

  if (appDef.NoneServiceMode) {
    that.data = {
      addressList: [{ img: imageToolkit.getImage([2, "18A0020200"]), city: "beijin", name: "某某店", address: "北京国贸商厦1-4", distance: "100km", score: 5 }, { img: imageToolkit.getImage([2, "18A0020500"]), city: "beijin", name: "某某店", address: "北京三里屯1-5",distance: "100km", score: 5 },]
    };
    callback();
  } else {
    service.wxtoolkit.request(that.serviceUrl).then(function (res) {
      that.data = res;

      callback();
    }).catch(function (reason) {

      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log('>>>>>> error：' + that.serviceUrl);
      console.log('>>>>>> error：options ::');
      console.dir(options);
      console.log('>>>>>> error：' + reason);
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    });
  }
};

module.exports = {
  createController: function () {
    return new nearbyStoreController();
  }
}
*/

class nearbyStoreController {
  constructor(name) {
    this.data = {
      addressList: []
    };
  }

  onLoad(options, callback) {
    let that = this;

    if (appDef.NoneServiceMode) {
      that.data = {
        addressList: [{ img: imageToolkit.getImage([2, "18A0020200"]), city: "beijin", name: "某某店", address: "北京国贸商厦1-4", distance: "100km", score: 5 }, 
        { img: imageToolkit.getImage([2, "18A0020500"]), city: "beijin", name: "某某店", address: "北京三里屯1-5", distance: "100km", score: 5 },]
      };
      callback();
    } else {
      service.wxtoolkit.request(that.serviceUrl).then(function (res) {
        that.data = res;

        callback();
      }).catch(function (reason) {

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log('>>>>>> error：' + that.serviceUrl);
        console.log('>>>>>> error：options ::');
        console.dir(options);
        console.log('>>>>>> error：' + reason);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

      });
    }
  }
}
/*
module.exports = {
  createController: function () {
    return new nearbyStoreController();
  }
}
*/

module.exports = new nearbyStoreController();