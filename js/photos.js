// params filter
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
var album;
if (params.length === 0 || params.hasOwnProperty('album') === false) {
    location.href = "index.html";
} else {
    album = params['album'];
}

// initial comment
$comment = $('#SOHUCS');
$comment.attr('sid', 'photo-' + album);

// initial photos
var $photo = [
    $('#photo-col-1'), $('#photo-col-2'), $('#photo-col-3')
];
function init_normal_style_photo(current_row){
    var i = current_row;
    function init_html(i){
        var photo_html = '<div class="panel" style="margin-bottom: 1px">' +
            '<div class="cuadro_intro_hover">' +
            // mix
            '<div class="mix">' +
            '<img src="' + photos[album].img[i] + '" class="img-responsive" style="width: 100%;height: 100%;"/>';

        if (photos[album].title[i] !== "" && photos[album].title[i] !== undefined)
            photo_html += '<p style="margin-top: 5px">[ ' + photos[album].title[i] + ' ]</p>';

        if (photos[album].comment[i] !== "" && photos[album].comment[i] !== undefined) {
            photo_html += '<small><i class="fa fa-music"></i>&nbsp;' + photos[album].comment[i] + '</small>';
        }

        photo_html += '</div>' +
            // caption
            '<div class="caption">' +
            '<div class="blur"></div>' +
            '<div class="caption-text">' +
            '<button type="button" class="btn btn-default btn-circle btn-layer" onclick="button_click()">' +
            '<i class="fa fa-heart-o faa-pulse animated"></i></button>' +
            '<a href="' + photos[album].img[i] + '" class="img-wrapper">' +
            '<button type="button" class="btn btn-info btn-circle btn-layer">' +
            '<i class="fa fa-photo faa-float animated"></i></button></a>' +
            '</div></div>' +
            // end of panel
            '</div></div>';

        return photo_html;
    }

    for (var current_photo = 0; current_photo < 3; current_photo ++) {
        $photo[current_photo].html($photo[current_photo].html() + init_html(i));
        i += 1;
        if (i === photos[album].img.length)
            break;
    }
}

function pagination_click(page) {
    $(".pagination li:eq(page) a").addClass("active");
    $("#page2").addClass("active");

    console.log("in");
    console.log($(".pagination li:eq(page) a").addClass("active"));
}

function button_click() {
    console.log("in");
    console.log("-" + $(this).attr("class"));
    $(this).addClass("btn-warning").removeClass("btn-default");
    $("this i").removeClass("fa-heart-o").addClass("fa-heart");
}

if (photos.hasOwnProperty(album) && photos[album].img.length > 0) {
    // initial pagination
    var current_page = 1;
    var pagination_html = '<li class="active"><a href="javascript: void(0);">1</a></li>';
    for (var row = 6; row < photos[album].img.length; row += 6){
        pagination_html += '<li><a class="" href="javascript: void(0);" onclick="pagination_click(2)" id="page_2">' + (row/6+1) + '</a></li>';
    }
    $('.pagination').html(pagination_html);

    for (var row = 0; row < photos[album].img.length; row+=3) {
        $("#photo-loader").html(init_normal_style_photo(row));
    }
} else {
    $("#photo-loader").html('<h2 class="text-center text-success"><span class="fa fa-camera"></span> 照片都丢了，伤心：(</h2>');
}

