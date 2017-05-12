/**
 * Created by liye on 2017/5/9.
 */

/**
 * config carousel here
 * @type {*[]}
 */
var carousel = [
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-14.jpg", "content": '拯救地球好累，虽然有些疲惫但我还是会'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-23.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-24.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-12.jpg", "content": '载着你仿佛载着阳光，不管到哪里都是晴天'},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-21.jpg", "content": ''},
    {"img": "http://opmpd352q.bkt.clouddn.com/carousel-22.jpg", "content": ''}
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
        slides_html += (item + '<img src="' + carousel[i].img + '" style="width: 100%;height: 100%;" />' + caption + '</div>');
    }
    slides_html += '</div>';
    return slides_html;
}

/**
 * init carousel here
 * @type {string}
 */
var carousel_id = 'theme-carousel';
var carousel_html = init_indicators(carousel, carousel_id) + init_slides(carousel) + init_controls(carousel_id);
$('#' + carousel_id).html(carousel_html);