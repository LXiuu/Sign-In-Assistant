const app = getApp();
Page({
  data: {
    value: "", // 文本的内容
    texts: "至少5个字",
    placeholder: "给大佬递茶🍵...大佬请说！",
    maxlength: 150, // 最大输入长度，设置为 -1 的时候不限制最大长度
  },
  //字数限制  
  inputs: function (e) {
    var value = e.detail.value;
    var len = parseInt(value.length);

    //最多字数限制
    if (len > this.data.maxlength) return;
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },
  bindFormSubmit: function (e) {
    if (app.globalData.userInfo) {
      var userNick = app.globalData.userInfo.nickName;
      var userImg = app.globalData.userInfo.avatarUrl;
      var textarea = e.detail.value.textarea;
      var that = this;
      if (textarea == "") wx.showToast({
        title: "你认真的吗🙃！",
        icon: "none"
      });
      else {
        wx.request({
          url: app.globalData.ServerUrl + "suggest_upload.php",
          data: {
            Scontent: textarea,
            Sauthor: userNick,
            userImg: userImg
          },
          header: {
            "content-type": "application/json"
          },
          success: function (res) {
            //console.log(res.data);
            if (res.data == 'true') {
              that.setData({
                noteNowLen: 0,
                value: ""
              }),
                wx.showToast({
                  title: "谢谢你的建议!",
                  icon: "success"
                });
            } else {
              wx.showToast({
                title: "提交失败",
                icon: "none"
              });
            }
          },
          fail: function (res) {
            wx.showToast({
              title: "提交失败",
              icon: "none"
            });
          }
        });
      }
    }else{
      wx.showToast({
        title: "请先授权登录",
        icon: "none"
      });
    }
  },
  onLoad: function() {
    wx.setNavigationBarTitle({ title: "建议或反馈" })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});