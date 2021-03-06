/**
 * Created by Liye on 2017/5/30.
 * 1. some common functions
 * 2. img url
 */

/* get params */
function getUrlParams() {
    var url = String(window.document.location.href);
    var params = {};
    var count = 0;
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value;
        count = count + 1;
    });
    params['length'] = count;
    return params;
}


// carousel
var carousel = [
    {
		"img": "img/carousel/c1_760x400.jpg", 
		"content": '<顽固> 鼻青脸肿的哭过／若无其事的忘记', 
		"title": 'Beautiful Eyes, a private site of world wonderful photos.'
	},
    {
		"img": "img/carousel/c2_760x400.jpg", 
		"content": '<晴天> rui sou sou xi dou xi la／sou la xi xi xi xi la xi la sou',
		"title": 'Whisper - 李美丽是一只傻猫'
	},
    {
		"img": "img/carousel/c3_760x400.jpg", 
		"content": '<倔强> 我就是我自己的神／在我活的地方',
		"title":'Album - 被分类的照片集合',
	},
    {
		"img": "img/carousel/5.jpeg", 
		"content": '<理想> 梦醒后/还是依然奔波在风雨的街头／有时候想哭就把泪 咽进一腔热血的胸口',
		"title":'Gallery - 主题照片展览',
	},
    {
		"img": "img/carousel/c5_760x400.jpg", 
		"content": '<步步> 如果相识／不能相恋／是不是还不如擦肩',
		"title": '<i class="fa fa-envelope-open-o"></i>&nbsp; Contact me<mark>联系英俊帅气潇洒的我</mark>'
	},
];

// album
var album_imgs = [
    {
        "img": "./img/album/front-1.jpg",
        "title": "摄影集",
        "desc": "2013退休至今<br/>爸爸的摄影集",
        "weather": "晴/雨/多云",
        "count": "9",
        "star": "<i class='fa fa-star'></i>".repeat(5),
        "id": "daddy"
    },
	{
	    "img": "./img/album/front-Serbia.jpg",
	    "title": "Belgrade Sebia&Kotor Montenegro",
	    "desc": "2019.10<br/>东欧行",
	    "weather": "晴/小雨",
	    "count": "8",
	    "star": "<i class='fa fa-star'></i>".repeat(6),
	    "id": "sebia"
	},
    {
        "img": "./img/album/front-9.jpg",
        "title": "Tokyo Japan",
        "desc": "2018.05<br/>东京 - 五月天",
        "weather": "晴/雨",
        "count": "4",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>",
        "id": "tokyo"
    },
    {
        "img": "./img/album/front-8.jpg",
        "title": "Lombok - Gili T Indonesia",
        "desc": "2018.03<br/>龙目 - T岛",
        "weather": "晴",
        "count": "4",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>",
        "id": "lombok"
    },
    {
        "img": "./img/album/front-10.jpg",
        "title": "Koh Chang Thailand",
        "desc": "2017.10<br/>象岛",
        "weather": "晴",
        "count": "5",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>",
        "id": "koh-chang"
    },
    {
        "img": "./img/album/front-2.jpg",
        "title": "Ko Samui Thailand",
        "desc": "2016.04<br/>5 days in Ko Samui for Lei's wedding",
        "weather": "晴",
        "count": "3",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>",
        "id": "samui"
    },
    {
        "img": "./img/album/front-3.jpg",
        "title": "Seoul Korea",
        "desc": "2015.04<br/>ICDE 2015",
        "weather": "晴/雨",
        "count": "5",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i>",
        "id": "seoul"
    },
    {
        "img": "./img/album/front-5.jpg",
        "title": "一图一城",
        "desc": "2016.06<br/>华东五市 与家人",
        "weather": "晴",
        "count": "6",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i>",
        "id": "city"
    },
    {
        "img": "./img/album/front-4.jpg",
        "title": "西塘&舟山",
        "desc": "2016.05-07<br/>毕业收集篇",
        "weather": "ALL",
        "count": "6",
        "star": "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i>",
        "id": "chuanchuan"
    },
    {
        "img": "./img/album/front-6.jpg",
        "title": "Jeju Korea",
        "desc": "2016.06<br/>After-graduation trip at Jeju Island",
        "weather": "小雨",
        "count": "2",
        "star": "<i class='fa fa-star'></i>".repeat(3),
        "id": "jeju"
    },
    /* {
        "img": "./img/album/front-7.jpg",
        "title": "申十七",
        "desc": "仅用此祝生日快乐",
        "weather": "<i class='fa fa-sun-o'></i>",
        "count": "3",
        "star": "<i class='fa fa-birthday-cake'></i><i class='fa fa-birthday-cake'></i>",
        "id": "seven"
    } */
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
    {"classify": "wind", "img": "./img/gallery/gallery1.jpg"},
    {"classify": "wind", "img": "./img/gallery/gallery2.jpg"},
    {"classify": "wind", "img": "./img/gallery/gallery3.jpg"},
    {"classify": "field", "img": "./img/gallery/gallery4.jpg"},
    {"classify": "hometown", "img": "./img/gallery/gallery5.jpg"},
    {"classify": "mounting", "img": "./img/gallery/gallery6.jpg"},
    {"classify": "mounting", "img": "./img/gallery/gallery7.jpg"},
    {"classify": "hometown", "img": "./img/gallery/gallery8.jpg"},
    {"classify": "field", "img": "./img/gallery/gallery9.jpg"}
];

// photos
var photos = {
    "sebia": {
        "img": [
			"img/album/sebia/s - 1.png",
			"img/album/sebia/s - 2.png",
			"img/album/sebia/s - 3.png",
			"img/album/sebia/s - 4.png",
			"img/album/sebia/s - 5.png",
			"img/album/sebia/s - 6.png",
			"img/album/sebia/s - 7.png",
			"img/album/sebia/s - 8.png",
        ],
		"big": [
			"img/album/sebia/l - 1.png",
			"img/album/sebia/l - 2.png",
			"img/album/sebia/l - 3.png",
			"img/album/sebia/l - 4.png",
			"img/album/sebia/l - 5.png",
			"img/album/sebia/l - 6.png",
			"img/album/sebia/l - 7.png",
			"img/album/sebia/l - 8.png",
		],
        "title": [
        ],
        "comment": [
        ]
    },
    "seoul": {
        "img": [
            "./img/album/album-3-1.jpg",
            "./img/album/album-3-2.jpg",
            "./img/album/album-3-3.jpg",
            "./img/album/album-3-4.jpg",
            "./img/album/album-3-5.jpg",
            "./img/album/album-3-6.jpg",
            "./img/album/album-3-7.jpg",
            "./img/album/album-3-8.jpg",
            "./img/album/album-3-9.jpg"
        ],
        "title": [
        ],
        "comment": [
        ]
    },
    "samui": {
        "img": [
            "./img/album/album-2-5.jpg"
        ],
        "title": [
            "chinese wedding door games"
        ],
        "comment": [
        ]
    },
    "daddy": {
        "img": [
            "./img/album/album-1-1.jpg",
            "./img/album/album-1-2.jpg",
            "./img/album/album-1-3.jpg",
            "./img/album/album-1-4.jpg",
            "./img/album/album-1-5.jpg",
            "./img/album/album-1-6.jpg",
            "./img/album/album-1-7.jpg",
            "./img/album/album-1-8.jpg",
            "./img/album/album-1-9.jpg"
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
    "jeju": {
        "img" : [
            "./img/album/album-7-2.jpg"
        ],
        "title": [
            "海豚"
        ],
        "comment" : [
            "海边偶遇"
        ]
    },
    "city": {
        "img": [
            "./img/album/album-4-1.jpg",
            "./img/album/album-4-2.jpg",
            "./img/album/album-4-3.jpg",
            "./img/album/album-4-4.jpg",
            "./img/album/album-4-5.jpg",
            "./img/album/album-4-6.jpg"
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
    }
};