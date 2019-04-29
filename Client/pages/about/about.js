Page({
  data: {},
  mysterious: function() {
    wx.showModal({
      title: '🤣🤣🤣',
      content: '居然被发现了(*/ω＼*)',
      confirmText: "神秘入口",
      success(res) {
        if (res.confirm) {
          wx.showModal({
            title: '🤣🤣🤣',
            content: '还是弹窗没想到吧哈哈😎',
            confirmText: "真的入口",
            cancelText: "假的入口",
            success(res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../suggestList/suggestList',
                })
              }
              if (res.cancel) {
                wx.showModal({
                  title: '🤣🤣🤣',
                  content: '说是假的你还不信🙃',
                  confirmText: "糟老头子",
                  success(res) {
                    if (res.confirm) {
                      wx.navigateTo({
                        url: '../suggestList/suggestList',
                      })
                    }
                  }
                })
              }
            }
          })
        }
      }
    })

  },
  onLoad: function() {
    wx.setNavigationBarTitle({
      title: "关于"
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});