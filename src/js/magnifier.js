define(['jquery'], function() {
    return {
        magnifier: function() {
            var movebox = $('.smallview'),
                bigpic = $('#bpic'),
                small = $('.bigImg'),
                big = $('.bigview');


            small.on('mouseover', function() {
                movebox.css('display', 'block');


                big.css('display', 'block');
                movebox.css({
                    'width': small.width() * big.width() / bigpic.width() + 'px',
                    'height': small.height() * big.height() / bigpic.height() + 'px',
                });

                small.on('mousemove', function(ev) {
                    var top = ev.pageY - small.offset().top - (movebox.height() / 2);
                    var left = ev.pageX - small.offset().left - (movebox.width() / 2);
                    var ratio = bigpic.width() / small.width();
                    if (left <= 0) {
                        left = 0;
                    } else if (left > small.width() - movebox.width()) {
                        left = small.width() - movebox.width() - 2;
                    }

                    if (top <= 0) {
                        top = 0;
                    } else if (top > small.height() - movebox.height()) {
                        top = small.height() - movebox.height() - 2;
                    }
                    var ratio = bigpic.width() / small.width();
                    movebox.css({ //修改定位
                        left: left + 'px',
                        top: top + 'px'
                    });

                    bigpic.css({
                        left: -left * ratio + 'px',
                        top: -top * ratio + 'px'
                    });
                });



            })
            small.on('mouseout', function() {
                movebox.css('display', 'none');
                big.css('display', 'none');
            });
            // 点击小图
            // let showlinum = 6;
            // let picli = $('.imgmenu ul li');
            // let liwidth = picli.eq(0).width();
            // $('.fa-angle-right').on('click', function() {

            //     if (showlinum < picli.length) {
            //         $('.fa-angle-left').css(color, '#333');
            //         showlinum++;
            //         if (showlinum === picli.length) {
            //             $('.fa-angle-right').css(color, '#fff');;
            //         }

            //         $('.imgmenu ul').animate(
            //             left: "-(showlinum - 6) * liwidth"
            //         )
            //     }
            // })




            // $('.fa-angle-left').on('click', function() {

            //     if (showlinum > 6) {
            //         $('.fa-angle-right').css(color, '#333');
            //         showlinum--;
            //         if (showlinum === 6) {
            //             $('.fa-angle-left').css(color, '#fff');;
            //         }

            //         $('.imgmenu ul').animate(
            //             left: "-(showlinum - 6) * liwidth"
            //         )
            //     }
            // })
        }
    }
})