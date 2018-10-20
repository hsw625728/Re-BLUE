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

function indexController(view)
{
  this.serviceUrl = appDef.RootUrl + "/index";
  this.data =
  {
    banner: []
  };
}

indexController.prototype.onLoad = function(options, callback)
{
  let that = this;
  service.wxtoolkit.request(that.serviceUrl).then(function (res) 
  {
    var banner = [];
    for (let i in res.banner)
    {
      banner.push({ img: imageToolkit.getImage(res.banner[i].img), goodId: res.banner[i].goodId});
    }
    that.data.banner = banner;

    callback();
  }).catch(function (reason) {

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log('>>>>>> error：' + that.serviceUrl);
    console.log('>>>>>> error：options ::');
    console.dir(options);
    console.log('>>>>>> error：' + reason);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  });
};

module.exports =
{
  createController: function () { return new indexController(); }
}