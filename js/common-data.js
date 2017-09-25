/**
 * Created by Liye on 2017/5/30.
 */

// carousel
var carousel = [
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-14.jpg", "content": '拯救地球好累，虽然有些疲惫但我还是会'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-23.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-24.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-12.jpg", "content": '载着你仿佛载着阳光，不管到哪里都是晴天'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-21.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-22.jpg", "content": ''}
];

// album
var album_imgs = [
    {
        "img": "http://opmpd352q.bkt.clouddn.com/7-0",
        "title": "7",
        "desc": "申十七"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-1.jpg",
        "title": "摄影集",
        "desc": "2013退休至今<br/>”秋风爽”摄影集之“世界那么大，不要停下你的脚步”<br/>天气：晴/雨/多云<br/>存放照片数：8<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-2.jpg",
        "title": "Ko Samui Thailand",
        "desc": "2016.04<br/>5 days in Ko Samui for Lei's wedding<br/>天气：晴<br/>存放照片数：3<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-3.JPG",
        "title": "Seoul Korea",
        "desc": "2015.04<br/>ICDE 2015<br/>天气：晴<br/>存放照片数：5<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i>"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/album-4-1.jpg",
        "title": "一图一城",
        "desc": "2016.06<br/>华东五市 与家人<br/>天气：晴<br/>存放照片数：6<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i>"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/album-5-2.jpg",
        "title": "串串合集",
        "desc": "2016.05-07<br/>毕业收集篇<br/>存放照片数：6<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i>"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-4.jpg",
        "title": "西塘&舟山",
        "desc": "2015.07<br/>陪老大毕业之“西塘、舟山”<br/>天气：晴/小雨<br/>存放照片数：0<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/album-7-2.jpg",
        "title": "Jeju Island Korea",
        "desc": "2016.06<br/>After-graduation trip at Jeju Island<br/>天气：小雨<br/>存放照片数：2<br/>期待值：<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>"
    }
];

// gallery
var gallery_classify = [
    "all",
    "wind",
    "hometown",
    "field",
    "mounting"
];

var gallery_imgs = [
    {"classify": "wind", "img": "http://opmpd352q.bkt.clouddn.com/gallery1.jpg"},
    {"classify": "wind", "img": "http://opmpd352q.bkt.clouddn.com/gallery2.jpg"},
    {"classify": "wind", "img": "http://opmpd352q.bkt.clouddn.com/gallery3.jpg"},
    {"classify": "field", "img": "http://opmpd352q.bkt.clouddn.com/gallery4.jpg"},
    {"classify": "hometown", "img": "http://opmpd352q.bkt.clouddn.com/gallery5.JPG"},
    {"classify": "mounting", "img": "http://opmpd352q.bkt.clouddn.com/gallery6.jpg"},
    {"classify": "mounting", "img": "http://opmpd352q.bkt.clouddn.com/gallery7.jpg"},
    {"classify": "hometown", "img": "http://opmpd352q.bkt.clouddn.com/gallery8.jpg"},
    {"classify": "field", "img": "http://opmpd352q.bkt.clouddn.com/gallery9.jpg"}
];

// comments
comments = [
    {
        "content": "7妹妹生日快乐：)",
        "name": "恬恬在奔跑",
        "time": "00:00am, 26 Sep 2017"
    },
    {
        "content": "<mark>7妹妹生日快乐：)</mark>",
        "name": "李美丽",
        "time": "00:00am, 26 Sep 2017"
    },
    {
        "content": '7妹妹生日快乐：) <i class="fa fa-heart-o"></i>',
        "name": "雪碧",
        "time": "00:00am, 26 Sep 2017"
    },
    {
        "content": '嘿嘿嘿：) <i class="fa fa-envelope-open-o"></i>',
        "name": "申十七",
        "time": "00:00am, 26 Sep 2017"
    },
    {
        "content": "7妹妹生日快乐：)",
        "name": "抠脚少女陈yz",
        "time": "00:00am, 26 Sep 2017"
    }
];

comment_pic = [
    "http://opmpd352q.bkt.clouddn.com/comment_3.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_4.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_5.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_1.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_2.jpg"
];

var album_source_id = [
    "daddy",
    "samui",
    "seoul",
    "city",
    "chuanchuan",
    "xitang",
    "jeju"
];

// photos
var photos = [
    {
        "img": [
            "http://opmpd352q.bkt.clouddn.com/7-1.jpg",
            "http://opmpd352q.bkt.clouddn.com/7-2",
            "http://opmpd352q.bkt.clouddn.com/7-3"
        ],
        "title": [
            "",
            "",
            ""
        ],
        "comment": [
            "<strong>申十七</strong>",
            "生日快乐",
            "<strong>：）</strong>"
        ]
    },
    {
        "img": [
            "http://opmpd352q.bkt.clouddn.com/album-1-1.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-2.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-3.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-4.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-5.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-6.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-7.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-8.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-1-9.jpg"
        ],
        "title": [
            "张北草原天路",
            "印山亭",
            "可可西里",
            "牧牛人",
            "甘孜眺望",
            "镰刀湾",
            "天葬台吃尸体的丌鹫",
            "色达五明佛学院",
            "浮桥头"
        ],
        "comment": [
            "张北草原位于张家口西北70公里的张北县境内，由中都和安固里两大草原组成。这里风光秀丽，气候宜人，您可尽情感受到回归大自然的情趣。",
            "平乐印山亭位于广西平乐县平乐镇西面马河的三江回合处的江中小岛上，印山亭就是三条龙要抢的龙珠。为平乐古景之一，因其特别位置，亦为桂江首景。",
            "青海可可西里国家级自然保护区位于青海省玉树藏族自治州西部，总面积450万公顷。是21世纪初世界上原始生态环境保存较好的自然保护区，也是中国建成的面积最大，海拔最高，野生动物资源最为丰富的自然保护区之一。",
            "甘孜藏族自治州位于四川省西部，康藏高原东南。总面积15.3万平方公里，是一个以藏族为主体民族的地级行政区。",
            "",
            "",
            "天葬是蒙古族、藏族等少数民族的一种传统丧葬方式，人死后把尸体拿到指定的地点让鹰（或者其他的鸟类、兽类等）吞食，天葬核心是灵魂不灭和轮回往复，死亡只是不灭的灵魂与陈旧的躯体的分离。",
            "全称是色达县喇荣寺五明佛学院，坐落在四川省甘孜藏族自治州色达县境县城东南方约20公里处，海拔4000米上。在重重的群山环绕之中，沟里的僧舍，以佛学院的大经堂为中心，密密麻麻搭满了四面的山坡，不计其数的绛红色小木屋，延绵无数，一眼望不到头。",
            ""
        ]
    },
    {
        "img": [
            "http://opmpd352q.bkt.clouddn.com/album-2-5.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-2-2.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-2-4.jpg"
        ],
        "title": [
            "",
            "",
            ""
        ],
        "comment": [
            "wedding door games",
            "",
            ""
        ]
    },
    {
        "img" : [
            "http://opmpd352q.bkt.clouddn.com/korea-1.jpg",
            "http://opmpd352q.bkt.clouddn.com/korea-2.jpg",
            "http://opmpd352q.bkt.clouddn.com/korea-3.jpg",
            "http://opmpd352q.bkt.clouddn.com/korea-4.jpg",
            "http://opmpd352q.bkt.clouddn.com/korea-5.jpg"
        ],
        "title": [
            "",
            "",
            ""
        ],
        "comment" : [
            "9:00am<br/>初恋的香味就这样被我们寻回<br/>那温暖的阳光 像刚摘的鲜艳草莓<br/>你说妳舍不得吃掉这一种感觉",
            "",
            "13:00pm<br/>红灯停 绿灯行<br/>我从远方赶来 恰巧你们也在 痴迷流连人间 我为她而狂野",
            "",
            "17:00pm<br/>说不定我一生涓滴意念 侥幸汇成河<br/>然后我俩各自一端<br/>望着大河弯弯 终于敢放胆<br/>嘻皮笑脸 面对人生的难"
        ]
    },
    {
        "img": [
            "http://opmpd352q.bkt.clouddn.com/album-4-1.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-4-2.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-4-3.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-4-4.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-4-5.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-4-6.jpg"
        ],
        "title": [
            "上海",
            "乌镇",
            "杭州",
            "苏州",
            "无锡",
            "南京"
        ],
        "comment": [
            "消失的旧时光一九四三 回头看的片段有一些风霜<br/>老唱盘旧皮箱 装满了明信片的铁盒里藏着一片玫瑰花瓣",
            "檐下窗棂斜映枝桠 与妳席地对座饮茶<br/>我以工笔画将妳牢牢的记下 提笔不为风雅<br/>灯下叹红颜近晚霞 我说缘份一如参禅不说话<br/>妳泪如梨花洒满了纸上的天下 爱恨如写意山水画",
            "是谁在耳边说 爱我永不变<br/>只为这一句 断肠也无怨",
            "我又从西厢过 十二年前的白日梦<br/>记下当年的你的我 水调歌头词一首",
            "是非成败转头空 青山依旧在 几度夕阳红",
            "莫名的情愫啊 请问谁来将它带走呢<br/>只好把岁月化成歌 留在山河"
        ]
    },
    {
        "img": [
            "http://opmpd352q.bkt.clouddn.com/album-5-1.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-5-2.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-5-3.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-5-4.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-5-5.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-5-6.jpg"
        ],
        "title": [
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        "comment": [
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    },
    {
        "img": [],
        "title": [],
        "comment": []
    },
    {
        "img": [
            "http://opmpd352q.bkt.clouddn.com/album-7-1.jpg",
            "http://opmpd352q.bkt.clouddn.com/album-7-2.jpg"
        ],
        "title": [
            "",
            ""
        ],
        "comment": [
            "<br/>把窗户打开吧 心情会好一点 这样我还能微笑着和你分别<br/>那是我最喜欢的唱片 你说那是一段音乐 却会让我在以后想念<br/>说着付出生命的誓言 回头看看繁华的世界<br/>爱你的每个瞬间像飞驰而过的地铁",
            "<br/>海豚突然跃出海面<br/>我像个孩子一样背着相机直冲海边"
        ]
    }
];