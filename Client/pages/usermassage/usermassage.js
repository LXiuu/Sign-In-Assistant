// pages/usermassage/usermassage.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    xuehao: "",
    ischange:"",
    value:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({ title: "我的信息" })
    this.showMassage();
  },
  showMassage:function(e){
    var that = this;
    var userid = wx.getStorageSync('openid'); //用户id
    wx.request({
      url: app.globalData.ServerUrl + 'usermassage.php',
      data: {
        userid: userid
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        //console.log(res.data)
        if (res.data != null) {
          that.setData({
            name: res.data[0].name,
            xuehao: res.data[0].xuehao,
            ischange: res.data[0].ischange,
            value:""
          })
        }else{
          wx.showModal({
            title: '📢提示',
            showCancel: false,
            content: "信息暂时为空😅，快去添加课程吧",
            success(res){
              //返回上一个页面
              if(res.confirm){
                wx.navigateBack({
                  delta: 1 
                })
              }
            }
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindFormSubmit: function(e) {
    var that =this;
    var userid = wx.getStorageSync('openid'); //用户id
    var newname = e.detail.value.name;
    var newxuehao = e.detail.value.xuehao;
    if (that.data.ischange==0){
      if (newname && newxuehao != "") {
        wx.showModal({
          title: '📢提示',
          content: "只有一次机会哟，确认要修改吗(●'◡'●)",
          success(res) {
            if (res.confirm) {
              wx.request({
                url: app.globalData.ServerUrl + 'changeMgs.php',
                data: {
                  userid: userid,
                  newname: newname,
                  newxuehao: newxuehao
                },
                method: 'POST',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                dataType: 'json',
                responseType: 'text',
                success: function(res) {
                  //console.log(res.data)
                  if (res.data){
                    wx.showToast({
                      title: '修改成功',
                      icon:'success'
                    })
                    that.showMassage();
                  }else{
                    wx.showModal({
                      title: '📢提示',
                      showCancel: false,
                      content: "修改失败，请稍后再试🙃",
                    })
                  }
                },
                fail: function(res) {},
                complete: function(res) {},
              })
            }
          }
        })
      }else{
        wx.showToast({
          title: '都不能为空哦',
          icon:'none'
        })
      }
    }else{
      wx.showModal({
        title: '📢提示',
        content: "你已经修改过啦🙃",
        showCancel: false,
      })
    }
  },
  mystery:function(){
    wx.showToast({
      title: '爱是一道光(/▽＼)',
      icon: 'none',
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