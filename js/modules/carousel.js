/**
 * Created by liye on 2017/5/9.
 */

/**
 * config carousel here
 * @type {*[]}
 */
var carousel_1 = [
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-11.jpg", "content": '看不见你的笑我怎么睡得着'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-12.jpg", "content": '载着你仿佛载着阳光，不管到哪里都是晴天'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-13.jpg", "content": '爱是不是不开口才珍贵'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-14.jpg", "content": '拯救地球好累'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-15.jpg", "content": '天空仍灿烂，它爱着大海'}
];

var carousel_2 = [
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-21.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-22.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-23.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-24.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-25.jpg", "content": ''}
];

function init_indicators(carousel, id) {
    var indicators_html =
        '<ol class="carousel-indicators">' +
        '<li data-target="#' + id + '" data-slide-to="0" class="active"></li>';
    for (var i = 1; i < carousel.length; i++){
        indicators_html += '<li data-target="#' + id + '" data-slide-to="' + i + '"></li>';
    }
    indicators_html += '</ol>';
    return indicators_html;
}

function init_controls(id) {
    var controls_html =
        '<a class="left carousel-control" href="#' + id + '" role="button" data-slide="prev">' +
        '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span></a>' +
        '<a class="right carousel-control" href="#' + id + '" role="button" data-slide="next">' +
        '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span></a>';
    return controls_html;
}

function init_slides(carousel){
    var slides_html =
        '<div class="carousel-inner" role="listbox">';
    for (var i=0; i<carousel.length; i++){
        var item = (i==0)?'<div class="item active">':'<div class="item">';
        var caption = '<div class="carousel-caption"><p>' + carousel[i].content + '</p></div>';
        slides_html += (item + '<img src="' + carousel[i].img + '" style="width:100%" />' + caption + '</div>');
    }
    slides_html += '</div>';
    return slides_html;
}

/**
 * init carousel here
 * @type {string}
 */
var carousel_id_1 = 'theme-carousel-1';
var carousel_html_1 = init_indicators(carousel_1, carousel_id_1) + init_slides(carousel_1) + init_controls(carousel_id_1);
$('#' + carousel_id_1).html(carousel_html_1);

var carousel_id_2 = 'theme-carousel-2';
var carousel_html_2 = init_indicators(carousel_2, carousel_id_2) + init_slides(carousel_2) + init_controls(carousel_id_2);
$('#' + carousel_id_2).html(carousel_html_2);