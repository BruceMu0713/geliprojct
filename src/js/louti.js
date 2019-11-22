define(['jquery'], function($) {
    return {
        louti: function() {
            $('#leftBar a').on('click', function() {
                // 元素距离页面顶部的高度
                var top = $('.' + $(this).attr('title')).offset().top;
                $('html,body').animate({
                    scrollTop: top
                }, 600);
            });

            $(window).on('scroll', function() {
                // 获得当前页面距离滚动条顶部的高度
                var top = $(document).scrollTop();
                var i = 0;
                if (top >= 1750) {
                    i = 4;
                } else if (top >= 1250) {
                    i = 3;
                } else if (top >= 750) {
                    i = 2;
                } else if (top >= 250) {
                    i = 1;
                    $('#leftBar').show()
                } else { $('#leftBar').hide() }
                $('#leftBar>div').removeClass('active');
                $('#leftBar>div:eq(' + i + ')').addClass('active');
            });
        }
    }
})