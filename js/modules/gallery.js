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
    {"classify": "hometown", "img": "http://opmpd352q.bkt.clouddn.com/gallery4.jpg"},
    {"classify": "field", "img": "http://opmpd352q.bkt.clouddn.com/gallery5.JPG"},
    {"classify": "mounting", "img": "http://opmpd352q.bkt.clouddn.com/gallery6.jpg"},
    {"classify": "mounting", "img": "http://opmpd352q.bkt.clouddn.com/gallery7.jpg"},
    {"classify": "field", "img": "http://opmpd352q.bkt.clouddn.com/gallery8.jpg"},
    {"classify": "hometown", "img": "http://opmpd352q.bkt.clouddn.com/gallery9.jpg"}
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
            '<img class="img-responsive" src="' + gallery_imgs[i].img + '" width="100%" />' +
            '</a></div>';
    }
    gallery_html += '</div>';
    
    return gallery_html;
}

$("#gallery-content").html(init_gallery());