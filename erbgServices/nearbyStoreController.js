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
        addressList: [{ img: imageToolkit.getImage([4, "ERBG"]), city: "北京", name: "北京合生汇", address: "北京市朝阳区西大望路甲22号合生汇购物中心L2-08号", distance: "100km", tel: "010-87725802‬", score: 5 }, 
          { img: imageToolkit.getImage([4, "ERBG"]), city: "北京", name: "北京国瑞城", address: "北京市东城区崇文门外大街18号1幢国瑞购物中心F1-14号", distance: "100km", tel: "010-67104451‬", score: 5 }, 
          { img: imageToolkit.getImage([4, "ERBG"]), city: "杭州", name: "杭州滨江宝龙", address: "杭州市滨江区滨盛路3867号滨江宝龙城1区1号楼F1-059", distance: "100km", tel: "0571-86919735‬", score: 5 }, 
          ]
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