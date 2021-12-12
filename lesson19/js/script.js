$(document).ready(function () {
        $('.header-burger').click(function (event) {
            $('.header-burger,.header-menu, .languages').toggleClass('active');
            $('body').toggleClass('lock');
        });
        $('.header-list').click(function(event) {
            $('.header-burger,.header-menu, .languages').removeClass('active');
            $('body').removeClass('lock');
        });
    });
