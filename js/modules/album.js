/**
 * Created by liye on 2017/5/9.
 */

album_imgs = [
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-1.jpg",
        "title": "摄影集",
        "desc": "不要停下你的脚步"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-2.jpg",
        "title": "苏梅",
        "desc": "5 days in Ko Samui for Lei's wedding"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-3.JPG",
        "title": "首尔",
        "desc": "2015年4月于首尔"
    },
    {
        "img": "http://opmpd352q.bkt.clouddn.com/front-4.jpg",
        "title": "西塘&舟山",
        "desc": "2015年暑假于西塘、舟山"
    }
];

function init_album() {
    var album_html = '<div class="col-md-4 col-sm-6 col-xs-12">';
    for (var i = 0; i < album_imgs.length; i+=3){
        album_html += '<div class="panel panel-default">' +
            '<div class="panel-body">' +
            '<img src="' + album_imgs[i].img + '" class="img-responsive"/>' +
            '<h3>' + album_imgs[i].title + '</h3>' +
            '<p>' + album_imgs[i].desc + '</p>' +
            '<p><a href="photos.html?album=' + (i+1) + '" target="_blank"><span class="fa fa-heart-o"></span> MORE</a></p>' +
            '</div></div>';
    }
    album_html += '</div><div class="col-md-4 col-sm-6 col-xs-12">';
    for (var i = 1; i < album_imgs.length; i+=3){
        album_html += '<div class="panel panel-default">' +
            '<div class="panel-body">' +
            '<img src="' + album_imgs[i].img + '" class="img-responsive"/>' +
            '<h3>' + album_imgs[i].title + '</h3>' +
            '<p>' + album_imgs[i].desc + '</p>' +
            '<p><a href="photos.html?album=' + (i+1) + '" target="_blank"><span class="fa fa-heart-o"></span>MORE</a></p>' +
            '</div></div>';
    }
    album_html += '</div><div class="col-md-4 col-sm-6 col-xs-12">';
    for (var i = 2; i < album_imgs.length; i+=3){
        album_html += '<div class="panel panel-default">' +
            '<div class="panel-body">' +
            '<img src="' + album_imgs[i].img + '" class="img-responsive"/>' +
            '<h3>' + album_imgs[i].title + '</h3>' +
            '<p>' + album_imgs[i].desc + '</p>' +
            '<p><a href="photos.html?album=' + (i+1) + '" target="_blank"><span class="fa fa-heart-o"></span>MORE</a></p>' +
            '</div></div>';
    }
    album_html += '</div>';
    return album_html;
}

// one second delay
setTimeout('$("#album-content").html(init_album())', 1000);