var photos = [
    {
        "img": [],
        "comment": []
    },
    {
        "img": [
			"http://opmpd352q.bkt.clouddn.com/album-2-5.jpg",
			"http://opmpd352q.bkt.clouddn.com/album-2-2.jpg",
			"http://opmpd352q.bkt.clouddn.com/album-2-4.jpg",
		],
        "comment": [
			"wedding door games",
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
        "comment": [
			"上海<br/>消失的旧时光一九四三 回头看的片段有一些风霜<br/>老唱盘旧皮箱 装满了明信片的铁盒里藏着一片玫瑰花瓣",
			"乌镇<br/>檐下窗棂斜映枝桠 与妳席地对座饮茶<br/>我以工笔画将妳牢牢的记下 提笔不为风雅<br/>灯下叹红颜近晚霞 我说缘份一如参禅不说话<br/>妳泪如梨花洒满了纸上的天下 爱恨如写意山水画",
			"杭州<br/>是谁在耳边说 爱我永不变<br/>只为这一句 断肠也无怨",
			"苏州<br/>我又从西厢过 十二年前的白日梦<br/>记下当年的你的我 水调歌头词一首",
			"无锡<br/>是非成败转头空 青山依旧在 几度夕阳红",
			"南京<br/>莫名的情愫啊 请问谁来将它带走呢<br/>只好把岁月化成歌 留在山河"
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
        "comment": []
    },
	{
        "img": [
			"http://opmpd352q.bkt.clouddn.com/album-7-1.jpg",
			"http://opmpd352q.bkt.clouddn.com/album-7-2.jpg"
		],
        "comment": [
			"<br/>把窗户打开吧 心情会好一点 这样我还能微笑着和你分别<br/>那是我最喜欢的唱片 你说那是一段音乐 却会让我在以后想念<br/>说着付出生命的誓言 回头看看繁华的世界<br/>爱你的每个瞬间像飞驰而过的地铁",
			"<br/>海豚突然跃出海面<br/>我像个孩子一样背着相机直冲海边"
		]
    }
];

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

var params = getUrlParams();
var album = 0;
if (params.length == 0 || params.hasOwnProperty('album') == false) {
    location.href = "index.html";
} else {
    album = params['album'];
}

function load(){
    if (photos[album-1].length == 0)
        return "";

    var photo_html = '<div class="col-md-4 col-sm-4 col-xs-12">';
    var length = photos[album-1].img.length;
    for (var i=0; i<length; i+=3){
        photo_html += '<div class="panel" style="margin-bottom: 1px">' +
            '<div class="mix">' +
            '<a href="' + photos[album-1].img[i] + '" class="img-wrapper">' +
            '<img src="' + photos[album-1].img[i] + '" class="img-responsive" style="width: 100%;height: 100%;"/>' +
            '</a></div>';
        if (photos[album-1].comment[i] != "" && photos[album-1].comment[i] != null)
            photo_html += '<p><i class="fa fa-hand-peace-o"></i> ' + photos[album-1].comment[i] + '</p></div>';
        else
            photo_html += '</div>';
    }
    photo_html += '</div><div class="col-md-4 col-sm-4 col-xs-12">';
    for (var i=1; i<length; i+=3){
        photo_html += '<div class="panel" style="margin-bottom: 1px">' +
            '<div class="mix">' +
            '<a href="' + photos[album-1].img[i] + '" class="img-wrapper">' +
            '<img src="' + photos[album-1].img[i] + '" class="img-responsive" style="width: 100%;height: 100%;"/>' +
            '</a></div>';
        if (photos[album-1].comment[i] != "" && photos[album-1].comment[i] != null)
            photo_html += '<p><i class="fa fa-hand-peace-o"></i> ' + photos[album-1].comment[i] + '</p></div>';
        else
            photo_html += '</div>';
    }
    photo_html += '</div><div class="col-md-4 col-sm-4 col-xs-12">';
    for (var i=2; i<length; i+=3){
        photo_html += '<div class="panel" style="margin-bottom: 1px">' +
            '<div class="mix">' +
            '<a href="' + photos[album-1].img[i] + '" class="img-wrapper">' +
            '<img src="' + photos[album-1].img[i] + '" class="img-responsive" style="width: 100%;height: 100%;"/>' +
            '</a></div>';
        if (photos[album-1].comment[i] != "" && photos[album-1].comment[i] != null)
            photo_html += '<p><i class="fa fa-hand-peace-o"></i> ' + photos[album-1].comment[i] + '</p></div>';
        else
            photo_html += '</div>';
    }
    photo_html += '</div>';
    return photo_html;
}

$("#photo-loader").html(load());






