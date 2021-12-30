// pages/goodsdetail/index.js
Page({

    data: {
        goods: [{
                goodsid: 1,
                price: 298,
                name: "CTH现炖燕窝 【经济保养款】纵享新鲜滋养 每瓶含2克干挑燕盏",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid1.jpg",
            },
            {
                goodsid: 2,
                price: 398,
                name: "CTH燕窝【孕期滋补款】 和你在加的一样新鲜有料 每瓶含3克干挑燕窝",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid2.jpg"
            },
            {
                goodsid: 3,
                price: 1600,
                name: "【CTH·溯源码燕窝干挑盏条】日常保养推荐 小巧玲珑精致营养 外形好性价比高 老顾客最爱",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/3xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/3xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/3xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid3.jpg"
            },
            {
                goodsid: 4,
                price: 1495,
                name: "【CTH·溯源码燕窝干挑大条】燕条我们也是用好料·也是手工挑毛·价格实惠·日常保养",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/4xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/4xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/4xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid4.jpg"
            },
            {
                goodsid: 5,
                price: 1650,
                name: "【CTH·溯源码燕窝干挑龙牙盏】日常保养初次体验推荐 高性价比实惠燕盏老顾客喜爱",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/5xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/5xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/5xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid5.jpg"
            },
            {
                goodsid: 6,
                price: 1600,
                name: "【CTH溯源码燕窝干挑破盏】从干挑大小盏里挑选出来 营养都一样 自吃性价比高 老顾客喜欢",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/6xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/6xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/6xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid6.jpg"
            },
            {
                goodsid: 7,
                price: 2450,
                name: "【CTH溯源码燕窝干挑大盏】漂亮大气 一眼爱上 送礼再合适不过",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/7xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/7xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/7xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid7.jpg"
            },
            {
                goodsid: 8,
                price: 1995,
                name: "【CTH溯源码燕窝干挑小盏】孕期/哺乳期优选 唾液酸含量高 一人吃两人补",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/8xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/8xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/8xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid8.jpg"
            },
            {
                goodsid: 9,
                price: 1680,
                name: "CTH燕窝自吃特惠款【燕角】燕盏上的修剪下来的肉边角底座 炖好后口感Q弹 浓稠",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/9xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/9xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/9xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid9.jpg"
            },
            {
                goodsid: 10,
                price: 1600,
                name: "【CTH溯源码燕窝老燕干挑三角盏】发头大 蛋清味浓 孕期 日常保养推荐 超高性价比",
                pics: [{
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/10xqsy1.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/10xqsy2.jpg"
                    },
                    {
                        src: "https://cdn.jsdelivr.net/gh/HGcth66/image/10xqsy3.jpg"
                    }
                ],
                xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid10.jpg"
            }
        ],
        goodsdetail: {
            goodsid: 1,
            price: 298,
            name: "CTH现炖燕窝 【经济保养款】纵享新鲜滋养 每瓶含2克干挑燕盏",
            pics: [{
                    src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy1.jpg"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy2.jpg"
                },
                {
                    src: "https://cdn.jsdelivr.net/gh/HGcth66/image/xqsy3.jpg"
                }
            ],
            xq: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid1.jpg"
        },
        goodsxq: [{
            id: 1,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq1.jpg"
        }, {
            id: 2,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq2.jpg"
        }, {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq3.jpg"
        }, {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq4.jpg"
        }, {
            id: 5,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq5.jpg"
        }, {
            id: 6,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq6.jpg"
        }, {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq7.jpg"
        }, {
            id: 8,
            src: "https://cdn.jsdelivr.net/gh/HGcth66/image/goodsxq9.jpg"
        }]
    },
    onShow: function () {
        let pages = getCurrentPages();
        let currentPage = pages[pages.length - 1];
        let options = currentPage.options;
        const {
            goodsid
        } = options;
        this.getgoodsdetail(goodsid);
    },
    getgoodsdetail(goodsid) {
        const {
            goods
        } = this.data;
        let goodsdetail = goods.find(v => v.goodsid == goodsid);
        this.setData({
            goodsdetail
        })
    },
    djimage(e) {
        const {
            goodsdetail
        } = this.data;
        const urls = goodsdetail.pics.map(v => v.src)
        const current = e.currentTarget.dataset.url
        wx.previewImage({
            current,
            urls
        })
    },
    jrgwc() {
        const {goodsdetail}=this.data;
        let goodsid=goodsdetail.goodsid
        let cart = wx.getStorageSync("cart") || [];
        let index=cart.findIndex(v=>v.goodsid===goodsid)
        if (index===-1){
            goodsdetail.num=1;
            goodsdetail.checked=true;
            cart.push(goodsdetail)
        }else{
            cart[index].num++
        }
        wx.setStorageSync('cart', cart)
        wx.showToast({
            title: '加入成功',
            mask: true,
            icon: 'success'
        })
    },
    ljgm(e){
        const {goodsid}=e.currentTarget.dataset
        console.log(goodsid);
        wx.navigateTo({
          url: "../pay/index?goodsid="+goodsid ,
        })
    }
})