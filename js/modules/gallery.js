/**
 * Created by liye on 2017/5/9.
 */

gallery_classify = [
    "all",
    "wind",
    "hometown",
    "field",
    "mounting"
];

gallery_imgs = [
    {"classify": "wind", "img": "http://opmpd352q.bkt.clouddn.com/gallery1.jpg"},
    {"classify": "wind", "img": "http://opmpd352q.bkt.clouddn.com/gallery2.jpg"},
    {"classify": "wind", "img": "http://opmpd352q.bkt.clouddn.com/gallery3.jpg"},
    {"classify": "field", "img": "http://opmpd352q.bkt.clouddn.com/gallery4.jpg"},
    {"classify": "hometown", "img": "http://opmpd352q.bkt.clouddn.com/gallery5.JPG"},
    {"classify": "mounting", "img": "http://opmpd352q.bkt.clouddn.com/gallery6.jpg"},
    {"classify": "mounting", "img": "http://opmpd352q.bkt.clouddn.com/gallery7.jpg"},
    {"classify": "hometown", "img": "http://opmpd352q.bkt.clouddn.com/gallery8.jpg"},
    {"classify": "field", "img": "http://opmpd352q.bkt.clouddn.com/gallery9.jpg"}
];

function init_gallery(){
    var gallery_html = "";

    // init classify
    gallery_html += '<div class="col-md-12 col-sm-12 col-xs-12 text-center">' +
        '<ul class="list-unstyled text-center">';
    for (var j in gallery_classify){
        var classify = (j==0)?gallery_classify[j]:'.'+gallery_classify[j];
        gallery_html += '<li class="filter btn btn-success" data-filter="' + classify + '">' + gallery_classify[j] + '</li>';
    }
    gallery_html += '</ul></div>';

    // init images
    for (var i = 0; i < gallery_imgs.length; i++){
        gallery_html += '<div class="mix ' + gallery_imgs[i].classify + ' col-md-4 col-sm-6 col-xs-12">' +
            '<a href="' + gallery_imgs[i].img + '" class="img-wrapper">' +
            '<img class="img-responsive" src="' + gallery_imgs[i].img + '" style="width: 100%;height: 100%;" />' +
            '</a></div>';
    }
    gallery_html += '</div>';
    
    return gallery_html;
}

var is_show_gallery = 0;
function call_show_gallery(){
    var gallery_dom_top = parseInt($('#gallery-content').position().top);
    var window_height = parseInt($(window).height());
    var scroll_top = parseInt($(window).scrollTop());

    // up_down_show = [0, window_height-100]
    var up_down_show = gallery_dom_top - scroll_top;
    if (up_down_show > 0 && up_down_show < window_height-100 && is_show_gallery === 0){
        is_show_gallery = 1;
        setTimeout(function () {
            $('#gallery-loading').fadeOut(1000, function () {
                $("#gallery-content").html(init_gallery());
                $('.container-gallery').mixItUp().magnificPopup({
                    delegate: 'a',
                    type: 'image'
                });
            });
        }, 1500);
    }
}