fullscreen();
$(window).resize(fullscreen);

function fullscreen() {
	var masthead = $('.covervid-wrapper');
	var windowH = $(window).height();
	var windowW = $(window).width();

	masthead.width(windowW);
	masthead.height(windowH);
}


coverVid(document.querySelector('.covervid-wrapper video'), 640, 360);