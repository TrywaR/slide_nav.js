(function($){
	$.fn.slider = function(options) {
		var
			options = $.extend({
				slide: '._slide',
				menu: '#menu',
			},
			options)

		return this.each(function() {
			var
				slider = $(this),
				slide = slider.find(options.slide),
				menu = $(options.menu),
				menu_items = menu.find('li'),
				index_x = 0,
				index_y = 0,
				menu_html = ''

			slider.css({
				'position': 'fixed',
				'top': '0',
				'left': '0',
				'right': '0',
				'bottom': '0',
				'transition': 'all 1s ease 0s'
			})

			$.each(slide, function(){
				var
					x = $(this).data('x') ? $(this).data('x')*100+'vw' : '0vw',
					y = $(this).data('y') ? $(this).data('y')*100+'vh' : '0vh',
					w = $(this).data('w') ? $(this).data('w')*100+'vw' : '100vw',
					h = $(this).data('h') ? $(this).data('h')*100+'vh' : '100vh'

				$(this).css({
					'position': 'absolute',
					'top': y,
					'left': x,
					'width': w,
					'height': h
				})
			})

			menu_items.on('click', function(){
				var
				x = slider.find(':eq('+$(this).index()+')').data('x'),
				y = +slider.find(':eq('+$(this).index()+')').data('y')

				x = x!=0 ? '-'+x*100+'vw' : 0 ;
				y = y!=0 ? '-'+y*100+'vh' : 0 ;

				slider.css({
					'top': y,
					'left': x
				})

				slider.find(':eq('+$(this).index()+')').addClass('active').siblings().removeClass('active')
			})
		})
	}
})(jQuery);