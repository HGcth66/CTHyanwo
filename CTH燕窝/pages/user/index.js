// pages/user/index.js
Page({
    data: {
    userinfo:{}
    },
    getuserinfo(e){
       const {userInfo}=e.detail;
       wx.setStorageSync('userinfo', userInfo)
       this.setData({userinfo:userInfo})
    },
    onShow(){
    let userinfo=wx.getStorageSync('userinfo')
    this.setData({userinfo});
    }
})