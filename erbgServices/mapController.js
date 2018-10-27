var appDef = require('../erbgServices/appDef.js');
var imageToolkit = require('../erbgServices/imageToolkit.js');
var service = require('../erbgServices/service.js');

class mapController {
  constructor(name) {
    this.serviceUrl = appDef.RootUrl + "/index";
    this.data = {
      markers: [],
      latitude: '',
      longitude: '',
      textData: {},
      city: '',
      markerId: 0
    };
  }

  onLoad = function(options, callback) {
    let that = this;
    
    if (appDef.NoneServiceMode) {
      wx.getLocation({
        type: 'gcj02',
        success: function(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;

          that.data = {
            longitude: options.longitude,
            latitude: options.latitude,
            markers: [{
              //iconPath: "",
              id: 0,
              longitude: options.longitude,
              latitude: options.latitude,
              //width: 50,
              //height: 50,
            }],
            polyline: [{
              points: [{
                longitude: longitude,
                latitude: latitude
              }, {
                longitude: options.longitude,
                latitude: options.latitude,
              }],
              color: "#0000DDFF",
            }],
            includePoints: [{
              longitude: longitude,
              latitude: latitude
            }, {
              longitude: options.longitude,
              latitude: options.latitude,
            }],
          };

          callback();
        }
      })

    } else {
      service.wxtoolkit.request(that.serviceUrl).then(function(res) {
        that.data = res;

        callback();
      }).catch(function(reason) {

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

module.exports = new mapController();