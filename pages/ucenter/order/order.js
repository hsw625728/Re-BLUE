var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

Page({
  data:{
    orderList: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    this.getOrderList();
  },
  getOrderList(){
    let that = this;
    util.request(api.OrderList).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          orderList: res.data.data
        });
      }
    });
  },
  payOrder(event){
    let id = event.target.dataset.orderId;
    let price = event.target.dataset.actualPrice;
    wx.redirectTo({
      url: '/pages/pay/pay?orderId=' + id + '&actualPrice=' + price,
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})