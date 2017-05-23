/**
 * Created by liye on 2017/5/9.
 */

album_imgs = [
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

var $album = [
    $('#album-col-1'), $('#album-col-2'), $('#album-col-3')
];
function init_album(current_row) {
    var i = current_row;
    function init_html(i) {
        var album_html = '<div class="panel panel-default">' +
            '<div class="panel-body">' +
            '<img src="' + album_imgs[i].img + '" class="img-responsive lazy" style="width: 100%;height: 100%;"/>' +
            '<h3>' + album_imgs[i].title + '</h3>' +
            '<p>' + album_imgs[i].desc + '</p>' +
            '<p><a href="photos.html?album=' + (i+1) + '" target="_blank"><span class="fa fa-heart-o"></span> MORE</a></p>' +
            '</div></div>';
        return album_html;
    }

    for (var current_album = 0; current_album < 3; current_album ++){
        $album[current_album].html($album[current_album].html() + init_html(i));
        i += 1;
        if (i >= album_imgs.length)
            break;
    }
}

var is_show_album = 0;
function call_show_album(){
    var dom_top = parseInt($('#album-content').position().top);
    var window_height = parseInt($(window).height());
    var scroll_top = parseInt($(window).scrollTop());

    // up_down_show = [0, window_height-30]
    var up_down_show = dom_top - scroll_top;

    if (up_down_show > 0 && up_down_show < window_height-30 && is_show_album === 0){
        is_show_album = 1;
        // $(window).off("scroll");
        //$(window).off("resize");
        setTimeout(function () {
            for (var row = 0; row < album_imgs.length; row += 3){
                init_album(row);
            }
            $('#album-loading').fadeOut(1000, function () {
                $('.album-panel-col').slideDown(2000);
            });
        }, 1500);
    }
}