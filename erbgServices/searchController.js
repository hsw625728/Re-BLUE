var appDef = require('../erbgServices/appDef.js');
var imageToolkit = require('../erbgServices/imageToolkit.js');
var service = require('../erbgServices/service.js');

//server json
//{
//  banner: [{ img: [1, "index1"], goodId: "x00000001" }, { img: [1, "index2"], goodId: "x00000002" }],
//  newInfo: []
//}

//view json
//{
//  banner: [{ img: "", goodId: "x00000001" }, { img: "", goodId: "x00000002" }],
//};

function searchController(view) {
  this.serviceUrl = appDef.RootUrl + "/search";
  this.data = {
    banner: [],
    goodslist: []
  };
}

searchController.prototype.onLoad = function (options, callback) {
  let that = this;

  if (appDef.NoneServiceMode) {
    that.data = {
      searchlist: [{ goodsid: "x00000001", img: imageToolkit.getImage([1, "buy1"]), name: "啊啊啊啊啊啊啊啊", issue_price: 9999.00, retail_price: 1.00 },
      { goodsid: "x00000002", img: imageToolkit.getImage([1, "buy2"]), name: "啊啊啊啊", issue_price: 2333.00, retail_price: 23.00 },
      { goodsid: "x00000003", img: imageToolkit.getImage([1, "buy3"]), name: "啊啊", issue_price: 2333.00, retail_price: 1.00 },
      { goodsid: "x00000001", img: imageToolkit.getImage([1, "buy1"]), name: "啊啊啊啊啊啊啊啊", issue_price: 9999.00, retail_price: 1.00 },
      { goodsid: "x00000002", img: imageToolkit.getImage([1, "buy2"]), name: "啊啊啊啊", issue_price: 2333.00, retail_price: 2333.00 },
      { goodsid: "x00000003", img: imageToolkit.getImage([1, "buy3"]), name: "啊啊", issue_price: 2333.00, retail_price: 2333.00 },
      { goodsid: "x00000001", img: imageToolkit.getImage([1, "buy1"]), name: "啊啊啊啊啊啊啊啊", issue_price: 9999.00, retail_price: 9999.00 },
      { goodsid: "x00000002", img: imageToolkit.getImage([1, "buy2"]), name: "啊啊啊啊", issue_price: 2333.00, retail_price: 233.00 },
      { goodsid: "x00000003", img: imageToolkit.getImage([1, "buy3"]), name: "啊啊", issue_price: 2333.00, retail_price: 1.00 }]
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
    return new searchController();
  }
}