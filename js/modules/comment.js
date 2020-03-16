/**
 * Created by liye on 2017/5/12.
 * weibo comment of index.html
 */
comments = [
    {
        "pic": "./img/comment/comment_4.jpg",
        "content": "<strong>有一个不为人知的秘密：</strong>这个网站，用电脑浏览器打开，比手机浏览器好看一万倍",
        "name": "李美丽",
        "time": "2017-10-14 20:24"
    },
    {
        "pic": "./img/comment/comment_6.jpg",
        "content": "虽然云存储挂了，丢了很多照片，但是，<strong>我回来了！</strong>",
        "name": "李美丽",
        "time": "2018-12-13 16:24"
    },
    {
        "pic": "./img/comment/comment_3.jpg",
        "content": "借我生猛与莽撞不问明天",
        "name": "恬恬在奔跑",
        "time": "2016-7-22 23:47 来自 iPhone 6"
    },
    {
        "pic": "./img/comment/comment_5.jpg",
        "content": '在天堂里当一只健康的小猫咪:(',
        "name": "sakura__-",
        "time": "2017-10-14 01:57 来自 iPhone 6s Plus"
    },
    {
        "pic": "./img/comment/comment_1.jpg",
        "content": '以前喜欢满天的星星 现在喜欢看月亮<br/>还很喜欢万物都静下来的夜晚<br/>像一个无声的怀抱 <i class="fa fa-envelope-open-o"></i>',
        "name": "申十七",
        "time": "2017-09-28 21:45 来自 iPhone 7 Plus"
    },
    {
        "pic": "./img/comment/comment_2.jpg",
        "content": "「那些听不见音乐的人认为那些跳舞的人疯了」",
        "name": "抠脚少女陈yz",
        "time": "--"
    },
    {
        "pic": "./img/comment/comment_4.jpg",
        "content": '<ul><li><a href="http://www.paperang.cn/" target="_blank">喵喵机</a></li><li><a href="http://c.b0yp.com/h.TFaVBM?cv=EXThZGrxuFc&sm=c94703" target="_blank"> 世界这么大 带你吃遍它</a></li><li><a href="http://www.reflower.com.cn/" target="_blank"> 花点时间：每周一花的小幸福</a></li></ul>',
        "name": "好物推荐",
        "time": "2017-10-14 23:00"
    },
	{
	    "pic": "./img/comment/comment_6.jpg",
	    "content": '<a href="susususuri.html" target="_blank">这里是个秘密</a>',
	    "name": "李美丽",
	    "time": "2020-03-16 21:00"
	},
];

var init_comment_count = 4;
var max_comment_count = comments.length;
var current_comment_count = init_comment_count;

function init_comment(){
    var comment_html = "";
    for (var i=0; i<init_comment_count; i++){
        comment_html += '<article class="comment">' +
            '<div class="comment-img"><img src="' + comments[i].pic + '" width="50" height="50" class="shake"></div>' +
            '<div class="comment-body">' +
            '<div class="text"><p>' + comments[i].content + '</p></div>' +
            '<p class="attribution">by <mark>' + comments[i].name + '</mark> at ' + comments[i].time + '</p>' +
            '</div></article>';
    }
    return comment_html;
}

function add_comment(){
    current_comment_count += 1;
    if (current_comment_count > max_comment_count)
        current_comment_count = 1;
    var flag = current_comment_count - 1;

    var comment_html = '<article class="comment">' +
        '<div class="comment-img"><img src="' + comments[flag].pic + '" width="50" height="50" class="shake"></div>' +
        '<div class="comment-body">' +
        '<div class="text"><p>' + comments[flag].content + '</p></div>' +
        '<p class="attribution">by <mark>' + comments[flag].name + '</mark> at ' + comments[flag].time + '</p>' +
        '</div></article>';

    $(comment_html).appendTo($('#comment-section'));
}

function remove_comment(){
    var $comment = $('#comment-section').find('.comment:first');
    $comment.remove();
}

$('#comment-section').html(init_comment());
setInterval("add_comment(); remove_comment();", 2500);
