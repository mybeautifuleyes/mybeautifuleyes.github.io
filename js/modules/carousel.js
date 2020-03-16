/**
 * Created by liye on 2017/5/9.
 */

/**
 * init carousel here
 * @type {string}
 */
var carousel_id = 'myCarouselImgs';
var carousel_html = init_carousel();
$('#' + carousel_id).html(carousel_html);
// $('#myCarouselTitle').html(init_carousel_title());

function init_carousel() {
	let item = "";
	for (let index = 0; index < carousel.length; index ++) {
		let img_obj = carousel[index];
		let item_class = index == 0?'item active':'item';
		let img_path = img_obj.img;
		let img_content = img_obj.content;
		item += '<div class="' + item_class + '"><img src="' + img_path + '"><div class="carousel-caption">' 
			+ '<p class="small"><i class="fa fa-envelope-open-o"></i>&nbsp; ' + img_content + '</p></div></div>';
	}
	return '<div class="carousel-inner">' + item + '</div>';
}

function init_carousel_title() {
	let html = "";
	for (let index = 0; index < carousel.length; index ++) {
		let img_obj = carousel[index];
		let title = img_obj.title;
		let item_class = index == 0?'list-group-item active':'list-group-item';
		html += '<li data-target="#myCarousel" data-slide-to="' + index + '" class="' + item_class + '"><h4>' + title + '</h4></li>';
	}
	console.log(html);
	return html;
}