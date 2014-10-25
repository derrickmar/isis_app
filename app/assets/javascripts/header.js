var aboutUsContent = "<li><a class='first-in-header-add-on-list'>Mission and Values</a></li> <li><a>Staff</a></li> <li><a>Board</a></li> <li><a>Contact Us</a></li>";
var ourCausesContent = "<li><a class='first-in-header-add-on-list'>Domestic Violence/Sexual Assault</a></li> <li><a>Academic Achievement Gap</a></li> <li><a>Prison Reform</a></li> <li><a>Political Finance</a></li>";

$(document).ready(function() {
	$('#sub-nav').hover(
		function() {
			$(this).addClass('open');
		}, function() {
			$(this).removeClass('open');
		});

	$('#our-causes').hover(
		function() {
			$('#sub-nav').addClass('open');
			$('.header-add-on-list').html(ourCausesContent);
		}, function() {
			$('#sub-nav').removeClass('open');
		});

	$('#about-us').hover(
		function() {
			$('#sub-nav').addClass('open');
			$('.header-add-on-list').html(aboutUsContent);
		}, function() {
			$('#sub-nav').removeClass('open');
		});
});