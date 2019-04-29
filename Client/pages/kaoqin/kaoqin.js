// pages/kaoqin/kaoqin.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    signKey: "",
    lessonid:''
  },

  keyInput: function (e) {
    this.setData({
      signKey: e.detail.value
    })
    wx.setStorageSync('signKey', e.detail.value);
  },
  kaoqin: function () {
    var that=this;
    if (that.data.signKey != "") {
      //console.log(this.data.signKey)
      wx.request({
        url: app.globalData.ServerUrl +'savaKey.php',
        data: {
          id: that.data.lessonid,
          signKey: that.data.signKey
        },
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          //console.log(res.data)
          if (res.data){
            that.setData({
              hiddenmodalput: !that.data.hiddenmodalput,
              showKey: that.data.signKey,
            })
          }else{
            wx.showToast({
              title: '发起考勤失败',
              icon: 'none'
            })
          }
        },
      })
    } else {
      wx.showToast({
        title: '口令为空，ㄟ( ▔, ▔ )ㄏ',
        icon: 'none'
      })
    }
  },
  //查看考勤名单
  confirm: function (e) {
    wx.redirectTo({
      url: '../t_signList/t_signList?lessonid=' + this.data.lessonid+'' })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    wx.setNavigationBarTitle({ title: options.slesson})
    this.setData({
      lessonid: options.lessonid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})