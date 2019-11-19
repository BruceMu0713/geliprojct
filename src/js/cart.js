let baseUrl = "http://10.31.154.122/1909dierjieduan/geliproject";
define(['jquery', 'cookie', 'carts'], function($, cookie, carts) {
    return {
        render: function() {
            let shop = cookie.get('shop');


            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join();
                $.ajax({
                    url: `${baseUrl}/src/php/lib/shop.php`,
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {


                        let cartstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);


                            let arr = shop.filter((val, i) => {
                                return val.id == elm.id
                            });


                            cartstr = `
                            
                            <div class="man1_con">
                                <div class="clear_fix"></div>
                                <ul class="listBox">
                                    <li class="pad_t20">
                                        <input type="checkbox" name="skuid" class="probtn">
    
                                    </li>
                                    <li class="man1_pro">
    
                                        <a href="javascript:;">
                                            <img style="line-height:18px;word-break:break-all " title="${elm.title}" class="wid_80 hei_80" src="${pic[0].src}">
                                        </a>
    
                                    </li>
                                    <li class="man1_n" style="vertical-align: middle;">
                                        <p class="man1_name">
                                            <a href="javascript:;" title="${elm.title}" target="_blank">
                                            ${elm.title}
                                                                            </a>
                                        </p>
    
                                        <div style="width: 180px; white-space:nowrap; overflow: hidden; text-overflow: ellipsis;">
                                            <a href="javascript:;" title="款式:${pic[0].style}&nbsp; &nbsp; " target="_blank">
                                                                                    款式:${pic[0].style}&nbsp; &nbsp;
                                                                            </a>
                                            <br>
                                        </div>
                                        <!--显示活动信息-->
                                    </li>
                                    <li class="man1_p_m price_font">
                                        <div class="price_font danjia1"> ¥${elm.price}
                                        </div>
    
    
                                    </li>
    
                                    <li class="man1_p_m" style="width:120px;">
                                        <div class="amount_box">
    
                                            <button style="cursor: pointer" class="fl min-quantity" type="button" id="rebtn">-</button>
                                            <input class="fl p-quantity " name="quantity" type="text" value="${arr[0].num}" autocomplete="off">
                                            <button style="cursor: pointer" class="maxquantity fl min-quantity " type="button" id="adbtn">+</button>
                                        </div>
    
                                        <div class="stock_box">
                                            库存:<span class="proAllQty">有货</span>
                                        </div>
                                    </li>
                                    <li class="man1_p_m price_font" style="width: 120px;">
                                        <strong class="danjia">¥${(elm.price*arr[0].num).toFixed(2)}</strong>
                                    </li>
                                    <li class="main1_del" style="width: 100px;">
                                        <a href="javascript:;">【删除】</a>
    
                                    </li>
                                </ul>
                            </div>
    
                        
`;
                            $('.content_list').append(cartstr);
                            carts.carts()
                        });
                    }
                })
            }


        }
    }
})