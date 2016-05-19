var controller = {
	init: function () {
		view.home.render();
	},
	pageBreak: function (n, fn) {
		$('#main-wrap > div').fadeOut(function(){
			fn && fn();
		});
	}
};
controller.init();
$(document).on('click', '.item', function () {
	var n = $(this).data('id');
	switch (n) {
		case 0:
			controller.pageBreak(n, view.home.render);
			break;
		case 1:		
			controller.pageBreak(n, view.page_one.render);
			break;
		case 2:
			controller.pageBreak(n, view.page_two.render);
			break;
		case 3:
			controller.pageBreak(n, view.page_three.render);
			break;
		case 4:
			controller.pageBreak(n, view.page_four.render);
			break;
	}
})
