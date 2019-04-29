// pages/queqinList/queqinList.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queqinList: [],
    length1: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this;
    var sList = wx.getStorageSync('sList') || [];
    //console.log(sList)
    var lessonid = e.lessonid;
    var keyid = e.keyid;
    //console.log(keyid)
    if (keyid == undefined){
      wx.request({
        url: app.globalData.ServerUrl +'queqinList.php',
        data: {
          lessonid: lessonid,
        },
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          //console.log(res.data)
          var allList = res.data;
          if (res.data == false) { } else {
            for (var i = 0; i < sList.length; i++) {
              for (var j = 0; j < res.data.length; j++) {
                if (sList[i] == res.data[j].xuehao) {
                  res.data.splice(j, 1);
                }
              }

            }
            that.setData({
              queqinList: res.data,
              length1: res.data.length
            })
            /**保存缺勤名单 */
            for (var i = 0; i < res.data.length; i++) {
              //console.log(res.data[i].openid)
              wx.request({
                url: app.globalData.ServerUrl +'savaqueqin.php',
                data: {
                  lessonid: e.lessonid,
                  openid: res.data[i].openid,
                  xuehao: res.data[i].xuehao,
                  name: res.data[i].name
                },
                method: 'POST',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                  //console.log(res.data)
                },
                fail: function (res) { },
                complete: function (res) { },
              })
            }
          }
        },
        fail: function (res) { },
        complete: function (res) { },
      })
    }else{
      wx.request({
        url: app.globalData.ServerUrl +'showqueqin.php',
        data: { keyid: keyid},
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(res) {
          if (res.data == null) {
            wx.showToast({
              title: '没人缺勤耶( •̀ ω •́ )y',
              icon: 'none'
            })
          } else {
            that.setData({
              queqinList: res.data,
              length1: res.data.length
            })
          }
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    }
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
    wx.removeStorageSync("sList")
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