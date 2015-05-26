(function() {
	alert("Hi");
	$('li.todo').hover(function() {
		$('.destroy').removeClass('hide');
	}, function() {
		$('.destroy').addClass('hide');
	});
})();
