var photos = [
    {
        "img": [],
        "comment": []
    },
    {
        "img": [],
        "comment": []
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
            "13:00pm<br/>红灯停 绿灯行",
            "",
            "",
            ""
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
        if (photos[album-1].comment[i] != "")
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
        if (photos[album-1].comment[i] != "")
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
        if (photos[album-1].comment[i] != "")
            photo_html += '<p><i class="fa fa-hand-peace-o"></i> ' + photos[album-1].comment[i] + '</p></div>';
        else
            photo_html += '</div>';
    }
    photo_html += '</div>';
    return photo_html;
}

$("#photo-loader").html(load());






