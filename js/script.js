$(function(){
    AOS.init();

    //헤더
    $('.header .menu_open').click(function() {
        $('body').addClass('no_scroll');
        $('.header .menu_wrap').css('display', 'flex');
    });
    $('.header .menu_close').click(function() {
        $('body').removeClass('no_scroll');
        $('.header .menu_wrap').hide();
    });
    $(document).ready(function() {
        function checkWindowSize() {
            if ($(window).width() >= 1024) {
                $('.menu_wrap').css('display', 'flex');
            } else {
                $('.menu_wrap').css('display', 'none');
            }
        }

        checkWindowSize();
        $(window).resize(function() {
            checkWindowSize();
        });
    });
});