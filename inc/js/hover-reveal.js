(function($) {

	$('.oxsn_hover_reveal_parent').mouseenter(function() {

		$('.oxsn_hover_reveal_child').fadeIn();

	}).mouseleave(function() {

		$('.oxsn_hover_reveal_child').fadeOut();

	});

	$('.oxsn_hover_reveal_child').mouseenter(function() {

		$('.oxsn_hover_reveal_child').show();

	}).mouseleave(function() {

		$('.oxsn_hover_reveal_child').fadeOut();

	});

})(jQuery);