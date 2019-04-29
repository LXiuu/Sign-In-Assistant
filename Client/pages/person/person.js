const app = getApp();
Page({
  data: {
    show_bt: !1,
    show_img: !0,
    userInfo: {}
  },
  onLoad: function(t) {
    if (app.globalData.userInfo) {
      this.setData({
        show_bt: true,
        show_img: false, //头像显示
        userInfo: app.globalData.userInfo,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          show_bt: true,
          show_img: false, //头像显示
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            show_bt: true,
            show_img: false, //头像显示
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onGotUserInfo: function(e) {
    var that = this;
    void 0 != e.detail.userInfo && (that.setData({
      show_bt: !0,
      show_img: !1,
      userInfo: e.detail.userInfo
    }),
    wx.setStorageSync("userNick", e.detail.userInfo.nickName), 
    wx.setStorageSync("avatarUrl", e.detail.userInfo.avatarUrl));
    app.globalData.userInfo = e.detail.userInfo;
  },
  onShow: function(e) {
    if (app.globalData.userInfo) {
      this.setData({
        show_bt: true,
        show_img: false, //头像显示
        userInfo: app.globalData.userInfo,
      })
    }
  },
  editMgs: function() {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: '../usermassage/usermassage',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      wx.showToast({
        title: '请先授权登录',
        icon: 'none'
      })
    }
  },
  suggest: function() {
    if (app.globalData.userInfo) {
      wx.navigateTo({
        url: '../suggest/suggest',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else {
      wx.showToast({
        title: '请先授权登录',
        icon: 'none'
      })
    }
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});