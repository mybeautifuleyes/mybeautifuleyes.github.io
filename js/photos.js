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
if (params.length === 0 || params.hasOwnProperty('album') === false) {
    location.href = "index.html";
} else {
    album = params['album'];
}
var source_id = album_source_id[parseInt(album) - 1];
$comment = $('#SOHUCS');
$comment.attr('sid', 'photo-' + source_id);

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
            '<img src="' + photos[album-1].img[i] + '" class="img-responsive" style="width: 100%;height: 100%;"/>';

        if (photos[album-1].title[i] !== "" && photos[album-1].title[i] !== null)
            photo_html += '<h4 class="photo-title">[ ' + photos[album-1].title[i] + ' ]</h4>';

        if (photos[album-1].comment[i] !== "" && photos[album-1].comment[i] !== null)
            photo_html += '<p><i class="fa fa-music"></i> ' + photos[album-1].comment[i] + '</p>';

        photo_html += '</div>' +
            // caption
            '<div class="caption">' +
            '<div class="blur"></div>' +
            '<div class="caption-text">' +
            '<button type="button" class="btn btn-default btn-circle btn-layer" onclick="button_click()">' +
            '<i class="fa fa-heart-o faa-pulse animated"></i></button>' +
            '<a href="' + photos[album-1].img[i] + '" class="img-wrapper">' +
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
        if (i === photos[album-1].img.length)
            break;
    }
}

function button_click() {
    console.log("in");
    console.log("-" + $(this).attr("class"));
    $(this).addClass("btn-warning").removeClass("btn-default");
    $("this i").removeClass("fa-heart-o").addClass("fa-heart");
}

for (var row = 0; row < photos[album-1].img.length; row+=3)
    $("#photo-loader").html(init_normal_style_photo(row));
