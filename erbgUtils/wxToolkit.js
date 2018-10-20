function wxTookit(rootUrl, tokenName)
{
  this.rootUrl = rootUrl;
  this.tokenName = tokenName;
}

wxTookit.prototype.request = function (url, data = {}, method = "GET") {
  var tokenName = this.tokenName;
  return new Promise(function (resolve, reject) {
    wx.request(
      {
        url: url,
        data: data,
        method: method,
        header: {
          'Content-Type': 'application/json',
          tokenName: wx.getStorageSync('token')
        },
        success: function (res) {
          if (res.statusCode == 200) {
            if (res.data.errno == 401) {
              //需要登录后才可以操作
            }
            else {
              resolve(res.data);
            }
          }
          else {
            reject(res.errMsg);
          }

        },
        fail: function (err) {
          reject(err)
        }
      })
  });
};

module.exports = 
{
  wxTookit: wxTookit
}