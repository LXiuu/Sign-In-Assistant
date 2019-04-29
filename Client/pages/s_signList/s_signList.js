const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signList: [],
    length1: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var lessonid = wx.getStorageSync('lessonid');//课程id
    //console.log(lessonid)
    wx.request({
      url: app.globalData.ServerUrl +'showSignList.php',
      data: {
        lessonid: lessonid,
      },
      method: 'POST',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        //console.log(res.data)
        if (res.data == false) {
        } else {
          that.setData({
            signList: res.data,
            length1: res.data.length
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onPullDownRefresh: function () {  //下拉刷新
    wx.showNavigationBarLoading(); //在标题栏中显示加载动画
    var that = this;
    var lessonid = wx.getStorageSync('lessonid');//课程id
    //console.log(lessonid)
    wx.request({
      url: app.globalData.ServerUrl +'showSignList.php',
      data: {
        lessonid: lessonid,
      },
      method: 'POST',
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        //console.log(res.data)
        if (res.data == false) {
        } else {
          that.setData({
            signList: res.data,
            length1: res.data.length
          })
        }
      },
      fail: function (res) { },
      complete: function (res) {
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //停止下拉刷新
      },
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