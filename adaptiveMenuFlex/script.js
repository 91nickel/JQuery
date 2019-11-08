$(".mobile-tab").hide(); //скрыли меню по умолчанию

$(document).on('click', function () {
	$(".mobile-tab").slideToggle(400);
})