jQuery(document).ready(function($) {
	function close_accordion_section(currentAttrValue) {
		$('.accordion .accordion-section-title[href='+ currentAttrValue +']').removeClass('active');
        $('.accordion .accordion-section-title[href='+ currentAttrValue +']').next().slideUp(300).removeClass('open');
	}

	$('#accordion-1').prev().addClass('active');
    $('#accordion-1').css('display','block');

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			close_accordion_section(currentAttrValue);
		}else {
			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
})(jQuery);