// pages/cart/index.js
Page({

    data: {
     cart:[],
     allchecked:false,
     totoilprice:0,
    },

    onLoad: function (options) {

    },
    onShow: function () {
    let cart=wx.getStorageSync('cart')||[];
    this.setData({cart})
    this.setcart(cart);
    },
    djqgg(){
        wx.switchTab({
          url: '../index/index',
        })
    },
    setcart(cart){
      let allchecked=true;
      let totoilprice=0;
      cart.forEach(v=>{
        if (v.checked==true){
          totoilprice+=v.price*v.num;
        }else{
          allchecked=false
        }
      })
      allchecked=cart.length!=0?allchecked:false;
      this.setData({
        cart,
        totoilprice,
        allchecked
    })
    wx.setStorageSync('cart', cart);
    },
    djcheckedall(){
      let {cart,allchecked}=this.data;
      allchecked=!allchecked;
      cart.forEach(v=>v.checked=allchecked);
      this.setcart(cart);
    },
    djchecked(e){
    const goodsid=e.currentTarget.dataset.id;
    const {cart}=this.data;
    const index=cart.findIndex(v=>v.goodsid==goodsid);
    cart[index].checked=!cart[index].checked;
    this.setcart(cart)
    },
    djjj(e){
      const goodsid=e.currentTarget.dataset.id;
      const {opration}=e.currentTarget.dataset;
      const {cart}=this.data;
      const index=cart.findIndex(v=>v.goodsid==goodsid)
      if(cart[index].num==1 && opration==-1){
        wx.showModal({
          title: '提示',
          content: '你要删除吗',
          success: (res)=> {
            if (res.confirm) {
              cart.splice(index,1)
              this.setcart(cart)
            } else if (res.cancel) {
            }
          }
        })
      }else{
        cart[index].num=cart[index].num+opration;
        this.setcart(cart);
      }
    },
    djjs(){
      const {cart}=this.data;
      if(cart.length!=0){
        wx.navigateTo({
          url: "../cartpay/index",
        })
      }else{
        wx.showToast({
          title: "请添加商品到购物车",
          icon:'none'
        })
      }
    }
})