$(function() {
    $('.next').click(function() {
        let currentImg = $('.sea.active');
        let nextImg = currentImg.next();

        if(nextImg.length == 0) {
            currentImg.removeClass('active');
            $('.sea').first().addClass('active');
        } else {
            currentImg.removeClass('active');
            nextImg.addClass('active');
        }
        
    });
    $('.prev').click(function() {
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if(prevImg.length == 0) {
            currentImg.removeClass('active');
            $('.sea').last().addClass('active');
        } else {
            currentImg.removeClass('active');
            prevImg.addClass('active');
        }
        
    });
});