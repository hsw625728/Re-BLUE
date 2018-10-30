var appDef = require('../erbgServices/appDef.js');
var imageToolkit = require('../erbgServices/imageToolkit.js');
var service = require('../erbgServices/service.js');
var api = require('../config/api.js');
//server json
//{
//  banner: [{ img: [1, "index1"], goodId: "x00000001" }, { img: [1, "index2"], goodId: "x00000002" }],
//  newInfo: []
//}

//view json
//{
//  banner: [{ img: "", goodId: "x00000001" }, { img: "", goodId: "x00000002" }],
//};
class indexController {
  constructor(name) {
    this.serviceUrl = appDef.RootUrl + "/index";
    this.data = {
      banner: [],
      goodslist: [],
      subCategoryList: []
    };
  }

  onLoad = function (options, callback) {
    let that = this;

    if (appDef.NoneServiceMode) {
      that.data = {
        banner: [{ img: imageToolkit.getImage([3, "home1"]), name: "全部商品", goodsid: "x00000001" },
        { img: imageToolkit.getImage([3, "home1"]), name: "本周上新", goodsid: "x00000002" },
        { img: imageToolkit.getImage([3, "home1"]), name: "定制搭配", goodsid: "x00000002" }],
        goodslist: [{ goodsid: "x00000001", img: imageToolkit.getImage([3, "home1"]), name: "啊啊啊", issue_price: 9999.00, retail_price: 1.00 },
        { goodsid: "x00000002", img: imageToolkit.getImage([3, "home2"]), name: "啊啊", issue_price: 2333.00, retail_price: 1.00 },
        { goodsid: "x00000003", img: imageToolkit.getImage([3, "home5"]), name: "啊啊啊", issue_price: 9999.00, retail_price: 1.00 },
        { goodsid: "x00000004", img: imageToolkit.getImage([3, "home4"]), name: "啊啊啊", issue_price: 2333.00, retail_price: 2333.00 },],
        subCategoryList: [{ id: 1008001,  name: "外套", icon: imageToolkit.getImage([2, "18A0020500"])},
          { id: 1008002, name: "裤装", icon: imageToolkit.getImage([2, "18A0020200"])},
          { id: 1008008, name: "半身裙", icon: imageToolkit.getImage([2, "18A0020701"]) },
          { id: 1008009, name: "T恤", icon: imageToolkit.getImage([2, "18A0050100"]) },
          { id: 1010003, name: "风衣", icon: imageToolkit.getImage([2, "18A0050603"]) },
          { id: 1011003, name: "衬衣", icon: imageToolkit.getImage([2, "18A0060100"]) },
          { id: 1011004, name: "连衣裙", icon: imageToolkit.getImage([2, "18A006030L"]) },
          { id: 1015000, name: "鞋配", icon: imageToolkit.getImage([2, "18A006090D"]) },]
      };
      callback();
    } else {
      service.wxtoolkit.request(that.serviceUrl).then(function (res) {
        that.data = res;

        for (let i in that.data.banner) {
          that.data.banner[i].img = imageToolkit.getImage(that.data.banner[i].img);
        }

        for (let i in that.data.goodslist) {
          that.data.goodslist[i].img = imageToolkit.getImage(that.data.goodslist[i].img);
        }

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


}

module.exports = new indexController();