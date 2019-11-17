let baseUrl = "http://10.31.154.122/1909dierjieduan/geliproject";

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                url: `${baseUrl}/src/php/lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    console.log(res);
                    // 定义六条数据
                    let reslist = res.slice(0, 6);
                    console.log(reslist);
                    let liststr = '';
                    reslist.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        liststr += `
                        <li style="background-color: #fff;margin: 0 10px 8px 0;position: relative;" class="item">

                        <!--商品图片 -->
                        <a class="cursor" style="display: block;padding: 5px" title="" target="_blank" href="${baseUrl}/src/html/xiangqing.html?id=${elm.id}">
                            <!--转换-->
                            <img src="${pic[0].src}" width="190" height="190">
                        </a>
                        <a class="cursor over_ell" style="color: #3e3a39;font-size: 14px; width: 100%;height: 17px;display: block;overflow: hidden;margin-top: 6px;  word-break: break-all;text-align: center;max-width: 200px;box-sizing: border-box;padding: 0 10px;" title="${elm.title}">
                        ${elm.title}
                            </a>
                        <a class="cursor over_ell" id="productAd1000051646" style="color: #979797;font-size: 12px; width: 100%;height:14px;display: block;overflow: hidden;margin-top: 2px;  word-break: break-all;text-align: center;max-width: 200px;box-sizing: border-box;padding: 0 10px;" title="${elm.details}">
                               
                            </a>

                        <label class="over_ell price_font" style="color: #FF4D4F;font-size:14px;cursor:pointer;display:block;text-align:center;margin-top:10px;width: 100%;max-width: 200px;box-sizing: border-box;padding: 0 13px;">
                                                                        ￥${elm.price}
                                                                </label>
                    </li>
                        `
                    });
                    $('.floorId193').append(liststr)
                }
            })
        }
    }
});