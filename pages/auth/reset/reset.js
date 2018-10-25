var app = getApp();
Page({
  data: {
    username: '',
    code: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成
    
  },
  onReady: function () {

  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  onPullDownRefresh: function () {
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

    //this.controller.onRefresh();


    wx.stopPullDownRefresh();


  },
  startLogin: function(){
    var that = this;
  },
  bindUsernameInput: function(e){
    
    this.setData({
      username: e.detail.value
    });
  },
  bindCodeInput: function(e){
    
    this.setData({
      code: e.detail.value
    });
  },
  clearInput: function(e){
    switch (e.currentTarget.id){
      case 'clear-username':
        this.setData({
          username: ''
        });
        break;
        case 'clear-code':
        this.setData({
          code: ''
        });
        break;
    }
  }
})