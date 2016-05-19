var controller = {
	init: function () {
		view.home.render();
		view.page_one.render();
		view.page_two.render();
		view.page_three.render();
		view.page_four.render();
	},
	pageBreak: function (self) {
		var n = self.data('id');
		$('.item').removeClass('active');
		self.addClass('active');
		$('.main-wrap').hide();
		$('#main-wrap-' + n).fadeIn();
	}
};
controller.init();
$(document).on('click', '.item', function () {
	var self = $(this);
	controller.pageBreak(self);
})
