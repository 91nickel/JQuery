$('.container h1').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
})

$(".anim").click(function (event) {
    console.log(event);
    $(this).fadeOut("slow");
})

$(function () {
    $('.icon').on('click', function () {
        $(this).closest('.menu').toggleClass('menu-open');
    });
});