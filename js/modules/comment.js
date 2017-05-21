/**
 * Created by liye on 2017/5/12.
 */

comments = [
    {
        "content": "好累，快被打败了",
        "name": "恬恬在奔跑",
        "time": "14:25pm, 12 Jun 2017"
    },
    {
        "content": "This is the best site I've ever seen, excellent, perfect. <mark>Update 2 photots at May 22</mark>",
        "name": "李美丽",
        "time": "14:26pm, 12 Jun 2017"
    },
    {
        "content": '好甜 <i class="fa fa-heart-o"></i>',
        "name": "雪碧",
        "time": "15:11pm, 12 Jun 2017"
    },
    {
        "content": '回答在牛奶箱里 <i class="fa fa-envelope-open-o"></i>',
        "name": "申十七",
        "time": "15:45pm, 12 Jun 2017"
    },
    {
        "content": "好漂亮啊。",
        "name": "抠脚少女陈yz",
        "time": "15:57pm, 12 Jun 2017"
    }
];

comment_pic = [
    "http://opmpd352q.bkt.clouddn.com/comment_3.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_4.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_5.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_1.jpg",
    "http://opmpd352q.bkt.clouddn.com/comment_2.jpg"
];

var init_comment_count = 3;
var max_comment_count = comments.length;
var current_comment_count = init_comment_count;

function init_comment(){
    var comment_html = "";
    for (var i=0; i<init_comment_count; i++){
        comment_html += '<article class="comment">' +
            '<div class="comment-img"><img src="' + comment_pic[i%5] + '" width="50" height="50" class="shake"></div>' +
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
        '<div class="comment-img"><img src="' + comment_pic[flag%5] + '" width="50" height="50" class="shake"></div>' +
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
setInterval("add_comment(); remove_comment();", 2000);
