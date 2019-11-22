let baseUrl = "http://10.31.154.122/1909dierjieduan/geliproject";
define(['jquery', 'magnifier', 'cookie'], function($, magnifier, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split('=')[1];
            $.ajax({
                url: `${baseUrl}/src/php/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {



                    let picnews = JSON.parse(res.pic);
                    let sampiclist = res.urls.split(',')


                    let pictitle = `
                   
                        <h1 class="fl cursor" title="${res.title}" style="font-size:18px;width:450px;margin-left:30px;line-height: 1.5em"> ${res.title}&nbsp; </h1>
                        <div id="isGoods1" title="${res.details}">
                            <p class="describe" style="width: 450px;">${res.details}</p>

                        </div>
                   
                    `;
                    $('.mid_title').append(pictitle);


                    $('.disprice').html(res.price);
                    $('.press_style').html(picnews[0].style);
                    let piclist = '';
                    sampiclist.forEach(elm => {

                        piclist = `
                        <li><img src="${elm}" alt=""></li>
`
                        $('.imgmenu ul').append(piclist);
                        $('#midimg').attr({
                            src: sampiclist[0]

                        });


                        magnifier.magnifier()

                    });


                    callback && callback(res.id, res.price, res.title);

                }
            })

            $('.imgmenu ul').on('click', 'li', function() {
                $('#midimg').attr({
                    src: $(this).find('img').attr('src')

                });


                $('#bpic').attr({
                    src: $(this).find('img').attr('src')

                });

            });


        },
        additem: function(id, price, title, num) {
            let shop = cookie.get('shop');
            console.log(shop);
            let product = {
                id: id,
                price: price,
                title: title,
                num: num
            };
            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null
                    });


                } else {
                    shop.push(product)
                }

            } else {
                shop = [];
                shop.push(product);


            }

            cookie.set('shop', JSON.stringify(shop), 10)
        },
        jiajian: function() {
            var plus = $(".btn-add");
            var i = $("#num").val();
            var subtract = $(".btn-reduce");

            plus.on('click', function() {
                i++;
                $("#num").val(i)
            });
            subtract.on('click', function() {
                if (i > 0) {
                    i--;
                    $("#num").val(i);

                } else {
                    i = 0;
                    $("#num").val(i);

                }
            })


        }
    }
});