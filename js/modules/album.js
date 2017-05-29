/**
 * Created by liye on 2017/5/9.
 */
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