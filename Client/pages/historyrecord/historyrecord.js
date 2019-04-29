// pages/historyrecord/historyrecord.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: [],
    index: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //console.log(options.lessonid)
    wx.request({
      url: app.globalData.ServerUrl +'showrecord.php',
      data: {
        lessonid: options.lessonid
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //console.log(res.data)
        if (res.data==null){
          wx.showToast({
            title: '暂无考勤纪录',
            icon: 'none'
          })
        }else{
          that.setData({
            record: res.data
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  chooserecord:function(e){
    var lessonid = e.currentTarget.dataset.lessonid;
    var keyid = e.currentTarget.dataset.keyid;
    wx.navigateTo({
      url: '../queqinList/queqinList?lessonid=' + lessonid + '&keyid=' + keyid + ''
    })

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