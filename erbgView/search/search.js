// erbgView/search/search.js

var searchController = require('../../erbgServices/searchController.js');

Page({

  controller: searchController.createController(this),
  initCallBack: function() {
    this.setData(this.controller.data);
    this.setData({
      showTopAni: ""
    });
    this.updateViewHeight();
  },

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
    this.controller.onLoad({}, () => {
      this.initCallBack();
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

  },

  onTapSortSwitch: function() {
    this.setData({
      showTypeList: !this.data.showTypeList
    });
    this.updateViewHeight();
  },

  onPageScroll: function(event) {
    let that = this;
    
    let safeHeightTop = 600 * wx.getSystemInfoSync().windowWidth / 750 + 1;
    let safeHeightBottom = this.data.scrollHeight - wx.getSystemInfoSync().windowHeight - safeHeightTop / 2;

    if (event.scrollTop < safeHeightTop) {
      event.scrollTop = safeHeightTop;
    } else if (event.scrollTop > safeHeightBottom) {
      event.scrollTop = safeHeightBottom;
    }

    let delta = event.scrollTop - this.data.oldScrollTop;

    if (delta > 0) {
      if (that.data.showTopAni != " hide") {

        that.setData({
          showTopAni: " hide"
        });
      }
    } else if (delta < 0) {
      if (that.data.showTopAni != " show") {
        that.setData({
          showTopAni: " show"
        });
      }
    }
    this.setData({
      oldScrollTop: event.scrollTop
    })
  },

  updateViewHeight: function() {
    wx.createSelectorQuery().select("#clientbody").boundingClientRect((rect) => {  
      this.setData({
        scrollHeight: rect.height  
      }) 
    }).exec();
  },

  inputFocus: function () {

  }
})