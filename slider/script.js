$(document).ready(function () {

    let images = $('.img');
    let firstImage = images.first();
    let lastImage = images.last();

    $(".n").on('click', function (event) {
        let currentImage = $('.current');
        let currentImageIndex = currentImage.index();
        let prevImageIndex = currentImage.index() - 1 < 0 ? lastImage.index() : currentImage.index() - 1;
        let nextImageIndex = currentImage.index() + 1 > lastImage.index() ? firstImage.index() : currentImage.index() + 1;

        currentImage.fadeOut(1000);
        currentImage.removeClass('current');

        if (event.currentTarget.classList.contains('prev')) {
            images.eq(prevImageIndex).fadeIn(1000);
            images.eq(prevImageIndex).addClass('current');

        } else if (event.currentTarget.classList.contains('next')) {
            images.eq(nextImageIndex).fadeIn(1000);
            images.eq(nextImageIndex).addClass('current');
        }
    });
});

