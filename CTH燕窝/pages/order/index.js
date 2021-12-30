// pages/order/index.js
Page({

    data: {
     allbuy:[]
    },
    onShow(){
        let allbuy=wx.getStorageSync('allbuy')||[];
        this.setData({allbuy})
    }
})