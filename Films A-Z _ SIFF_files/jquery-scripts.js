$(document).ready( function(){
	// Toggle Content Calendar
	$('#content span.cal-toggle').click(function (e) {
		e.preventDefault();
		$('#calendar2').slideToggle();
		$(this).children('i').toggleClass('fa-calendar').toggleClass('fa-times');
	});
	
	// Toggle header widgets
	$('#header .menu.sub > li > a').click(function (e) {
		if ($(this).next('div').length != 0)
		{
			e.preventDefault();
			$(this).next('div').slideToggle();
			$('#header .menu.sub > li > div').not($(this).next('div')).hide();
		}
	});

	// Browse widget scroll lists
	$('#header div.browse ul > li.toggle > a').click(function (e) {
		e.preventDefault();
		$(this).next('div').slideToggle();
	});

	// Hide header widgets on #page click
	$('#content').click(function () {
		$('#header .menu.sub li > div').removeAttr('style');
	});

	// Schedule scroller
	var countHours = $('div.timebar.count span').length;
	$('.schedule.prev').click(function (e) {
		e.preventDefault();
		if ( parseInt($('div.schedule-table').css('margin-left')) < 0 ) {
			$('div.schedule-table').animate({
				marginLeft:'+=400px'
			}, 100);
		}
	});
	$('.schedule.next').click(function (e) {
		e.preventDefault();
		if ( parseInt($('div.schedule-table').css('margin-left')) > -countHours * 80 ) {
			$('div.schedule-table').animate({
				marginLeft:'-=400px'
			}, 100);
		}
	});

	// Browse film filter
	$('.filter li.toggle > a').click(function (e) {
		e.preventDefault();
		$(this).parent().siblings().removeClass('open');
		$(this).parent().toggleClass('open');
		$('.filter div.scroll').not($(this).next()).hide();

		var scrollDiv = $(this).parent().find('div.scroll');
		scrollDiv.fadeToggle('fast',function(){
			var customScrollbar=scrollDiv.find('.mCSB_scrollTools');
			customScrollbar.css({'opacity':0});
			scrollDiv.mCustomScrollbar('update');
			customScrollbar.animate({opacity:1},'slow');
		});
	});

	// Browse film reload button
	$('.filter li.reload > a').click(function() {
		location.reload();
	});
	
	$("#sidebarNewsletterForm").validate();
	$("#footerNewsletterForm").validate();

	$('#slides').cycle({
		delay: 1000,
		fx: 'scrollHorz',
		next: '#hs-next',
		pager: '#pager',
		pause: 1,
		prev: '#hs-prev',
		speed: '300',
		timeout: 6000
	});

	$('#playing').cycle({
		delay: 1000,
		fx: 'scrollHorz',
		next: '#np-next',
		pause: 1,
		prev: '#np-prev',
		speed: '300',
		timeout: 6000
	});

	$('table.expand tbody tr').hide();
	//$('table.expand tr:last').show();
	$('table.expand tbody tr:nth-child(1)').show();
	$('table.expand tbody tr:nth-child(2)').show();
	$('table.expand tbody tr:nth-child(3)').show();
	$('table.expand tbody tr:nth-child(4)').show();
	$('table.expand tbody tr:nth-child(5)').show();

	$('.showall').click(function () {
		if ($(this).text() == 'Collapse')
		{
			$(this).removeClass('up').text('Show All');
			$('table.expand tbody tr').hide();
			//$('table.expand tr:last').show();
			$('table.expand tbody tr:nth-child(1)').show();
			$('table.expand tbody tr:nth-child(2)').show();
			$('table.expand tbody tr:nth-child(3)').show();
			$('table.expand tbody tr:nth-child(4)').show();
			$('table.expand tbody tr:nth-child(5)').show();
		}
		else
		{
			$('table.expand tbody tr').show();
			$(this).addClass('up').text('Collapse');
		}
		return false;
	});

	$('table.details tr').hide();
	$('table.details tr:last').show();
	$('table.details tr:nth-child(1)').show();
	$('table.details tr:nth-child(2)').show();
	$('table.details tr:nth-child(3)').show();
	$('table.details tr:nth-child(4)').show();
	$('table.details tr:nth-child(5)').show();
	$('table.details tr:nth-child(6)').show();

	$('.details-showall').click(function () {
		if ($(this).text() == 'Collapse')
		{
			$(this).removeClass('up').text('Show All');
			$('table.details tr').hide();
			$('table.details tr:last').show();
			$('table.details tr:nth-child(1)').show();
			$('table.details tr:nth-child(2)').show();
			$('table.details tr:nth-child(3)').show();
			$('table.details tr:nth-child(4)').show();
			$('table.details tr:nth-child(5)').show();
			$('table.details tr:nth-child(6)').show();
		}
		else
		{
			$('table.details tr').show();
			$(this).addClass('up').text('Collapse');
		}
		return false;
	});

	$('.playing').each(function () {
		var p = this.parentNode;
		$(this).cycle({
			activePagerClass: 'current',
			delay: 1000,
			fx: 'scrollHorz',
			next: $('.np-next', p),
			pager: $('.num', p),
			pause: 1,
			prev: $('.np-prev', p),
			speed: '300',
			timeout: 0
		});
	});
	
	$('a.close').click(function () {
		$(this).parent().parent().hide();
		$(this).parent().parent().siblings('.description').children('a.open').toggleClass('open');
		return false;
	});

	$("form").submit(function(){
		var query = $(this).find("input[name='q']").val();
		if(query.contains("&"))
		{
			query = query.replace("&", "and");
		}
		$(this).find("input[name='q']").val(query);
	});
	
	
	$('.img-slider.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		animationSpeed: 600,
		controlNav: false,
		directionNav: true,
		initDelay: 1000,
		itemWidth: 490,
		selector: ".slides > .slide"
	});

	$('.mysiff').click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		var mylink = $(this);
		$.get(url, function (data) {
			mylink.parent().toggleClass('selected');
		});
		return false;
	});
});


$(window).load(function(){
	$('div.scroll').mCustomScrollbar();
});


$(document).keyup(function (e) {
	if(e.keyCode === 27) {
		$('#header .menu.sub > li > div').hide();
	}
});