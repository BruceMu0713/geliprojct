let baseUrl = "http://10.31.154.122/1909dierjieduan/geliproject";
define(['jquery', 'fangdajing'], function($, a) {
    return {
        render: function() {
            let id = location.search.split('=')[1];
            $.ajax({
                url: `${baseUrl}/src/php/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    console.log(res);

                    let picnews = JSON.parse(res.pic);
                    let sampiclist = res.urls.split(',')
                    console.log(sampiclist);

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
                        a.magnifier();
                    });

                }
            })

            $('.imgmenu ul').on('click', 'li', function() {
                $('#midimg').attr({
                    src: $(this).find('img').attr(
                        'src'
                    )
                });
                console.log($(this).find('img').attr('src'));
            })


        }
    }
});