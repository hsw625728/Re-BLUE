// erbgView/storeInfo/storeInfo.js
var nearbyStoreController = require('../../erbgServices/nearbyStoreController.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressCur:{}
  },

  tel: function () {
    let that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.addressCur.tel, //此号码仅用于测试 。

      success: function () {
        console.log("拨打电话成功！")
      },

      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let addressList = nearbyStoreController.data.addressList;
    //console.log("onLoad!!!!!!!");
    for (let address of addressList) {
      if (address.addressId == options.id)
      {
        console.log("++++++++++++++++++++++++++++++++++");
        console.log(address.img);
        console.log(address.addressId);
        that.setData({
          addressCur: address
        });
        
      }

    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})