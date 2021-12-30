Page({
    data: {
    leftlist:[
        {
            id:0,
            name:"即食燕窝"
        },
        {
            id:1,
            name:"即炖燕窝"
        },
        {
            id:2,
            name:"鲜炖燕窝"
        },
        {
            id:3,
            name:"溯源燕窝"
        }
    ],
    currentindex:0,
    right:[
        {
            title:"即食燕窝",
            children:[
                {
                    goodsid:1,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid1.jpg",
                    name:"CTH燕窝【经济保养款】 纵享新鲜 每瓶含2克干挑燕窝",
                    price:298
                },
                {
                    goodsid:2,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid2.jpg",
                    name:"CTH燕窝【孕期滋补款】 和你在加的一样新鲜有料 每瓶含3克干挑燕窝",
                    price:398
                },
                {
                    goodsid:5,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid5.jpg",
                    name:"【CTH溯源码燕窝干挑龙牙盏】日常保养初次体验推荐 高性价比实惠燕盏老顾客喜爱",
                    price:3300
                },
                {
                    goodsid:6,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid6.jpg",
                    name:"【CTH溯源码燕窝干挑破盏】从干挑大小盏里挑选出来 营养都一样 自吃性价比高 老顾客喜欢",
                    price:1600
                }
            ]
        },
        {
            title:"即炖燕窝",
            children:[
                {
                    goodsid:1,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid1.jpg",
                    name:"CTH燕窝【经济保养款】 纵享新鲜 每瓶含2克干挑燕窝",
                    price:298
                },
                {
                    goodsid:2,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid2.jpg",
                    name:"CTH燕窝【孕期滋补款】 和你在加的一样新鲜有料 每瓶含3克干挑燕窝",
                    price:398
                },
                {
                    goodsid:3,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid3.jpg",
                    name:"【CTH溯源码燕窝干挑盏条】日常保养推荐 小巧玲珑精致营养 外形好性价比高 老顾客最爱",
                    price:1600
                },
                {
                    goodsid:6,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid6.jpg",
                    name:"【CTH溯源码燕窝干挑破盏】从干挑大小盏里挑选出来 营养都一样 自吃性价比高 老顾客喜欢",
                    price:1600
                },
                {
                    goodsid:7,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid7.jpg",
                    name:"【CTH溯源码燕窝干挑大盏】漂亮大气 一眼爱上 送礼再合适不过",
                    price:2450
                }
            ]
        },
        {
            title:"鲜炖燕窝",
                        children:[
                            {
                                goodsid:3,
                                src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid3.jpg",
                                name:"【CTH溯源码燕窝干挑盏条】日常保养推荐 小巧玲珑精致营养 外形好性价比高 老顾客最爱",
                                price:1600
                            },
                            {
                                goodsid:4,
                                src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid4.jpg",
                                name:"【CTH溯源码燕窝干挑大条】燕条我们也是用好料 也是手工挑毛 价格实惠 日常保养",
                                price:1495
                            },
                {
                    goodsid:5,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid5.jpg",
                    name:"【CTH溯源码燕窝干挑龙牙盏】日常保养初次体验推荐 高性价比实惠燕盏老顾客喜爱",
                    price:3300
                },
                {
                    goodsid:6,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid6.jpg",
                    name:"【CTH溯源码燕窝干挑破盏】从干挑大小盏里挑选出来 营养都一样 自吃性价比高 老顾客喜欢",
                    price:1600
                },
                {
                    goodsid:8,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid8.jpg",
                    name:"【CTH溯源码燕窝干挑小盏】孕期/哺乳期优选 唾液酸含量高 一人吃两人补",
                    price:1995
                },
                {
                    goodsid:9,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid9.jpg",
                    name:"CTH燕窝自吃特惠款【燕角】燕盏上的修剪下来的肉边角底座 炖好后口感Q弹 浓稠",
                    price:1680
                },
                {
                    goodsid:10,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid10.jpg",
                    name:"【CTH溯源码燕窝老燕干挑三角盏】发头大 蛋清味浓 孕期 日常保养推荐 超高性价比",
                    price:1600
                }
            ]
        },
        {
            title:"溯源燕窝",
            children:[
                {
                    goodsid:1,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid1.jpg",
                    name:"CTH燕窝【经济保养款】 纵享新鲜 每瓶含2克干挑燕窝",
                    price:298
                },
                {
                    goodsid:2,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid2.jpg",
                    name:"CTH燕窝【孕期滋补款】 和你在加的一样新鲜有料 每瓶含3克干挑燕窝",
                    price:398
                },
                {
                    goodsid:5,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid5.jpg",
                    name:"【CTH溯源码燕窝干挑龙牙盏】日常保养初次体验推荐 高性价比实惠燕盏老顾客喜爱",
                    price:3300
                },
                {
                    goodsid:6,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid6.jpg",
                    name:"【CTH溯源码燕窝干挑破盏】从干挑大小盏里挑选出来 营养都一样 自吃性价比高 老顾客喜欢",
                    price:1600
                },
                {
                    goodsid:8,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid8.jpg",
                    name:"【CTH溯源码燕窝干挑小盏】孕期/哺乳期优选 唾液酸含量高 一人吃两人补",
                    price:1995
                },
                {
                    goodsid:9,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid9.jpg",
                    name:"CTH燕窝自吃特惠款【燕角】燕盏上的修剪下来的肉边角底座 炖好后口感Q弹 浓稠",
                    price:1680
                },
                {
                    goodsid:10,
                    src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid10.jpg",
                    name:"【CTH溯源码燕窝老燕干挑三角盏】发头大 蛋清味浓 孕期 日常保养推荐 超高性价比",
                    price:1600
                }
            ]
        }
    ],
    rightcontent:[{
        title:"即食燕窝",
        children:[
            {
                goodsid:1,
                src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid1.jpg",
                name:"CTH燕窝【经济保养款】 纵享新鲜 每瓶含2克干挑燕窝",
                price:298
            },
            {
                goodsid:2,
                src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid2.jpg",
                name:"CTH燕窝【孕期滋补款】 和你在加的一样新鲜有料 每瓶含3克干挑燕窝",
                price:398
            },
            {
                goodsid:5,
                src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid5.jpg",
                name:"【CTH溯源码燕窝干挑龙牙盏】日常保养初次体验推荐 高性价比实惠燕盏老顾客喜爱",
                price:3300
            },
            {
                goodsid:6,
                src:"https://cdn.jsdelivr.net/gh/HGcth66/image/goodsid6.jpg",
                name:"【CTH溯源码燕窝干挑破盏】从干挑大小盏里挑选出来 营养都一样 自吃性价比高 老顾客喜欢",
                price:1600
            }
        ]
    }

],
stop:0
    },
   
   djleft(e){
       const {index}=e.currentTarget.dataset;
       const {right}=this.data;
       const {leftlist}=this.data;
       const {rightcontent}=this.data;
       rightcontent[0].title=right[index].title;
       rightcontent[0].children=right[index].children;
       this.setData({
           currentindex:index,
           rightcontent,
           stop:0
       })
   }
})