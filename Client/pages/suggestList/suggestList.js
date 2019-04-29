// pages/suggestList/suggestList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    suggestList:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: "#000000",
      backgroundColor: "#DCDCDC"
    });
    wx.setNavigationBarTitle({ title: "建议反馈" })
    var that=this;
    wx.request({
      url: app.globalData.ServerUrl + 'suggestList.php',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        if (res.data!="null"){
          //console.log(res.data)
          that.setData({
            suggestList: res.data
          })
        }else{
          wx.showToast({
            title: '居然没有意见哈哈哈哈',
            icon: 'none',
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
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