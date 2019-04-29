// pages/signList/signList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signList: [],
    length1: 0,
    hiddenSign: false,
    lessonid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    var that = this;
    that.setData({
      lessonid: e.lessonid
    })
  },
  stopSign: function(e) {
    var that = this;
    this.onPullDownRefresh();
    var signKey = wx.getStorageSync('signKey'); //课程id
    var sList = wx.getStorageSync('sList') || [];
    wx.request({
      url: app.globalData.ServerUrl +'stopSign.php',
      data: {
        id: that.data.lessonid,
        signKey: signKey
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        that.setData({
          hiddenSign: !that.data.hiddenSign
        })
        wx.showToast({
          title: '取消成功',
          icon: 'success'
        })
        /**停止考勤，查看缺勤 */
        for (var i = 0; i < that.data.signList.length; i++) {
          sList.unshift(that.data.signList[i].xuehao); //将获取信息写入本地缓存
        }
        wx.setStorageSync('sList', sList);
        wx.redirectTo({
          url: '../queqinList/queqinList?lessonid=' + that.data.lessonid + ''
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onPullDownRefresh: function() { //下拉刷新
    var that = this;
    wx.showNavigationBarLoading(); //在标题栏中显示加载动画
    wx.request({
      url: app.globalData.ServerUrl +'showSignList.php',
      data: {
        lessonid: that.data.lessonid,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        if (res.data == false) {} else {
          that.setData({
            signList: res.data,
            length1: res.data.length
          })
          wx.setStorageSync('signList', res.data); //将获取信息写入本地缓存
        }
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideNavigationBarLoading(); //完成停止加载
        wx.stopPullDownRefresh(); //停止下拉刷新
      },
    })
  },
  showqueqin: function() {

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
    var that = this;
    wx.request({
      url: app.globalData.ServerUrl +'showSignList.php',
      data: {
        lessonid: that.data.lessonid,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //console.log(res.data)
        if (res.data == false) {} else {
          that.setData({
            signList: res.data,
            length1: res.data.length,
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
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