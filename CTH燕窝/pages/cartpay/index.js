// pages/cartpay/index.js
Page({
    data: {
        address: {},
        cart: [],
        totoilprice: 0
    },

    onLoad: function (options) {

    },

    onReady: function () {

    },

    onShow: function () {
        const address = wx.getStorageSync('address');
        let cart = wx.getStorageSync('cart') || [];
        if (address.length == 0) {
            wx.getSetting({
                success: (result) => {
                    const scope = result.authSetting["scope.address"]
                    if (scope === true || scope === undefined) {
                        wx.chooseAddress({
                            success: (result1) => {
                                wx.setStorageSync('address', result1)
                            },
                        })
                    } else {
                        wx.openSetting({
                            success: (result2) => {
                                wx.chooseAddress({
                                    success: (result3) => {
                                        wx.setStorageSync('address', result3)
                                    },
                                })
                            }
                        })
                    }
                }
            })
        }
        this.setData({
            address
        })
        cart = cart.filter(v => v.checked);
        this.setData({
            cart
        })
        let totoilprice=0;
        cart.forEach(v => totoilprice += v.price * v.num)
        this.setData({
            totoilprice
        })
    },
    tjdd(){
        const {address,cart}=this.data;
        let buy={};
        buy.address=address;
        buy.cart=cart;
        let allbuy=wx.getStorageSync('allbuy')||[];
        allbuy.push(buy)
        wx.setStorageSync('allbuy', allbuy)
        cart.length=0
        wx.setStorageSync('cart', cart)
        wx.showToast({
          title: '支付成功',
          success(){
              setTimeout(() => {
                wx.switchTab({
                    url: '../index/index',
                  })
              }, 2000);
            
          },
          duration:2000
        })
    }
})