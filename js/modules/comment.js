/**
 * Created by liye on 2017/5/12.
 */
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
