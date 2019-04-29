// pages/sign/sign.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signKey: "",
    id: ""
  },

  keyInput: function(e) {
    this.setData({
      signKey: e.detail.value
    })
  },
  sign: function() {
    var that = this;
    var userid = wx.getStorageSync('openid'); //用户id
    if (this.data.signKey != "") {
      wx.request({
        url: app.globalData.ServerUrl +'checkLessonKey.php',
        data: {
          id: that.data.id,
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          console.log(res.data)
          if (res.data.lessonkey != undefined) {
            if (res.data.state != 'false') {
              if (that.data.signKey === res.data.lessonkey) {
                wx.request({
                  url: app.globalData.ServerUrl +'savaSign.php',
                  data: {
                    id: that.data.id,
                    userid: userid
                  },
                  method: 'POST',
                  header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  },
                  success: function(res) {
                    //console.log(res.data)
                    if (res.data){
                      wx.showToast({
                        title: '签到成功',
                        icon: 'success'
                      })
                      wx.redirectTo({
                        url: '../s_signList/s_signList'
                      })
                    }else{
                      wx.showToast({
                        title: '签到失败',
                        icon: 'success'
                      })
                    }
                  },
                  fail: function(res) {},
                  complete: function(res) {},
                })
              } else {
                wx.showToast({
                  title: '签到口令错误！',
                  icon: 'none'
                })
              }
            } else {
              wx.showToast({
                title: '签到已经结束!',
                icon: 'none'
              })
            }
          } else {
            wx.showToast({
              title: '该课程没有发起签到!',
              icon: 'none'
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      })
      //console.log(this.data.signKey)
    } else {
      wx.showToast({
        title: '签到口令为空 (+_+)?',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(options)
    this.setData({
      id: options.lessonid
    })
    wx.setNavigationBarTitle({
      title: options.slesson
    })
    wx.setStorageSync('lessonid', options.lessonid);
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

  }
})