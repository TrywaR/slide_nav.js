$(function(){
	var
		slider = $('.slider'),
		slide = slider.find('._slide'),
		menu = $('#menu'),
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
			x = $(this).data('x')*100+'vw',
			y = $(this).data('y')*100+'vh'

		$(this).css({
			'position': 'absolute',
			'top': y,
			'left': x,
			'width': '100vw',
			'height': '100vh'
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