// erbgView/search/search.js

var searchController = require('../../erbgServices/searchController.js');
var touchToolkit = require('../../erbgUtils/touchToolkit.js');

Page({

  controller: searchController.createController(this),
  initCallBack: function() {
    this.setData(this.controller.data);
    this.setData({
      showTopAni: ""
    })
  },

  touchToolkit: touchToolkit.touchToolkit(),

  /**
   * 页面的初始数据
   */
  data: {
    showTypeList: false,
    showTopAni: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.controller.onLoad(options, this.initCallBack);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.initCallBack();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onTapSortSwitch: function() {
    this.setData({
      showTypeList: !this.data.showTypeList
    });
  },

  touchStart: function(event) {
    this.touchToolkit.touchStart(event);
  },

  touchMove: function(event) {
    let that = this;

    this.touchToolkit.touchMove(event, function() {
      if (that.touchToolkit.touchMode == "up") {
        if (that.data.showTopAni != " show") {
          that.setData({
            showTopAni: " show"
          });
        }
      } else if (that.touchToolkit.touchMode == "down") {
        if (that.data.showTopAni != " hide") {
          that.setData({
            showTopAni: " hide"
          });
        }
      }
    });
  },

  touchEnd: function(event) {
    this.touchToolkit.touchEnd(event);
  }
})