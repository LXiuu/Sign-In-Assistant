const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    hide1: true,
    hide2: true,
    isRegister: false,
    sname: "",
    snum: "",
    slesson: "",
    sclass: "",
  },
  //点击按钮弹出指定的hiddenmodalput弹出框
  modalinput1: function(e) {
    var that = this;
    var userid = wx.getStorageSync('openid');
    if (app.globalData.userInfo == null) {
      wx.showModal({
        title: '📢提示',
        content: '先去授权登录哟(*/ω＼*)',
        confirmText: "确定",
        success(res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../person/person',
            })
          }
        }
      })
    } else {
      if (that.data.isRegister==false) {
        wx.request({
          url: app.globalData.ServerUrl + 'check_student.php',
          data: {
            userid: userid
          },
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {
            //console.log(res.data)
            if (!res.data) {
              that.setData({
                hiddenmodalput: !that.data.hiddenmodalput,
                hidden1: false,
                hidden2: true,
              })
            }else{
              that.setData({
                isRegister: true
              })
              wx.navigateTo({
                url: '../student_lesson/student_lesson'
              })
            }
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      } else {
        wx.navigateTo({
          url: '../student_lesson/student_lesson'
        })
      }
    }
  },
  modalinput2: function(e) {
    if (e.detail.userInfo != undefined) {
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput,
        hidden1: true,
        hidden2: false,
      })
    }
  },
  goLesson: function() {
    wx.navigateTo({
      url: '../teacher_lesson/teacher_lesson'
    })
  },
  //取消按钮
  cancel: function() {
    this.setData({
      hiddenmodalput: true,
    });
  },
  //确认
  confirm: function(e) {
    var that = this;
    this.setData({
      hiddenmodalput: true,
    })
    if ((that.data.sname && that.data.snum) || (that.data.slesson && that.data.sclass) != '') {
      this.charu()
      this.setData({
        slesson: "",
        sclass: "",
      })
    } else {
      wx.showToast({
        title: '输入为空(+_+)?',
        icon: 'none'
      })
    }
  },

  //获取input的信息
  setname: function(e) {
    this.setData({
      sname: e.detail.value
    })
  },
  setnum: function(e) {
    this.setData({
      snum: e.detail.value
    })
  },
  setlesson: function(e) {
    this.setData({
      slesson: e.detail.value,
      sname: "",
      snum:""
    })
  },
  setclass: function(e) {
    this.setData({
      sclass: e.detail.value,
      sname: "",
      snum: ""
    })
  },

  charu: function() {
    var that = this;
    var userid = wx.getStorageSync('openid');
    wx.request({
      url: app.globalData.ServerUrl + 'sign.php',
      data: {
        userid: userid,
        sname: that.data.sname,
        snum: that.data.snum,
        slesson: that.data.slesson,
        sclass: that.data.sclass
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        //console.log(res.data)
        if (res.data =="student_success") {
          wx.showToast({
            title: '添加成功！',
            icon: 'success'
          })
          wx.navigateTo({
            url: '../student_lesson/student_lesson'
          })
          that.setData({
            isRegister: true,
          })
        } else if(res.data =="lesson_success"){
          wx.showToast({
            title: '添加成功！',
            icon: 'success'
          })
          wx.navigateTo({
            url: '../teacher_lesson/teacher_lesson'
          })
        }else{
          wx.showToast({
            title: '失败请重试！😱',
          })
        }
      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function() {
      wx.hideLoading()
    }, 1500)
  },
  check_student: function() {


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
    this.setData({
      hiddenmodalput: true
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