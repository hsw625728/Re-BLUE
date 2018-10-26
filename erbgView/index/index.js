// erbgView/index/index.js

var indexController = require('../../erbgServices/indexController.js');

Page({
  /*
    controller: indexController.createController(this),
    */
  initCallBack: function() {
    this.setData(indexController.data);
  },

  /**
   * 页面的初始数据
   */
  data: {
    flag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    indexController.onLoad(options, this.initCallBack);
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
    /* 以后可能用得到
    // 动态设置导航条标题
    wx.setNavigationBarTitle({
      title: ''
    });
    wx.showNavigationBarLoading(); //在标题栏中显示加载图标

    wx.hideNavigationBarLoading();                   //完成停止加载
    // 动态设置导航条标题
    wx.setNavigationBarTitle({
      title: '我的'
    });
    */
    let that = this;
    indexController.onLoad({}, function() {
      that.initCallBack();
      wx.stopPullDownRefresh();
    });

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
    return {
      title: 'Re-BLUE',
      desc: '简易优雅的时尚女人'
    }
  },

  onTap: function() {
    this.setData({
      flag: !this.data.flag
    });
  }
})