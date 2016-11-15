$(window).scroll(function () {
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
		$(".btns").show("slow");
		$("#facepic").css({
			'width': '35px',
			'height': '35px'
		});
		$("#facepic").css('width', '35px');
		$(".filler").css('height', '60px');
	} else {
		$('header').removeClass("sticky");
		$("#facepic").css({
			'width': '200px',
			'height': '200px'
		});
		$(".filler").css('height', '220px');
		$(".btns").hide("slow");
	}
});