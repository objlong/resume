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
		if (n != 0) {
			$('#menu').css('height', 'auto');
		} else {
			$('#menu').css('height', '100%');
		}
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
}).on('click', '.triangle', function () {
	$(this).addClass('triangle-2');
})
