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
                    let reslist = res.slice(2, 8);
                    let midlist = res.slice(9, 12);
                    let rightlist = res.slice(12)
                    let liststr = '';
                    let midliststr = '';
                    let leftstr = '';
                    let rightstr = '';
                    console.log(reslist)
                    reslist.forEach(elm => {
                        let pic = JSON.parse(elm.pic);

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
                        ${elm.details}  
                            </a>

                        <label class="over_ell price_font" style="color: #FF4D4F;font-size:14px;cursor:pointer;display:block;text-align:center;margin-top:10px;width: 100%;max-width: 200px;box-sizing: border-box;padding: 0 13px;">
                                                                        ￥${elm.price}
                                                                </label>
                    </li>
                        `
                    });
                    // 左侧图片
                    let leftlist = JSON.parse(res[1].pic);
                    console.log(leftlist);

                    $('.floorId193').append(liststr);
                    console.log(midlist[0]);
                    let midlist0 = JSON.parse(midlist[0].pic);
                    console.log(midlist0);

                    let midlist1 = JSON.parse(midlist[1].pic);
                    let midlist2 = JSON.parse(midlist[2].pic);
                    let rightlist0 = JSON.parse(rightlist[0].pic);
                    console.log(rightlist0);

                    let rightlist1 = JSON.parse(rightlist[1].pic);


                    midliststr += `
                       
                <div class="top1">
                <a href="${baseUrl}/src/html/xiangqing.html?id=${midlist[0].id}"><img src="${midlist0[0].src}" alt=""></a>
                </div>
                <div class="bottom1">
                <a href="${baseUrl}/src/html/xiangqing.html?id=${midlist[1].id}"><img src="${midlist1[0].src}" alt=""></a>
                </div>
                <div class="bottom2">
                <a href="${baseUrl}/src/html/xiangqing.html?id=${midlist[2].id}"><img src="${midlist2[0].src}" alt=""></a>
                </div>
        
                        `


                    $('.mrjx2').append(midliststr);
                    leftstr += `
                    <a href="${baseUrl}/src/html/xiangqing.html?id=${leftlist[0].id}"><img src="${leftlist[0].src}" alt=""></a>
                    </div>
                    `
                    $('.mrjx1').append(leftstr);
                    rightstr += `
                    
                <div class="top1">
                <a href="${baseUrl}/src/html/xiangqing.html?id=${rightlist[0].id}"><img src="${rightlist0[0].src}" alt=""></a>
                </div>
                <div class="bottom1">
                <a href="${baseUrl}/src/html/xiangqing.html?id=${rightlist[1].id}"><img src="${rightlist1[0].src}" alt=""></a>
                </div>
          
                    `
                    $('.mrjx3').append(rightstr);
                }
            })
        },
        login1: function() {
            const morenhz = document.querySelector('#morenhz');
            const dengluhz = document.querySelector('#dengluhz');
            const exit = document.querySelector('.tcbtn')
            if (localStorage.getItem('yhm')) {
                morenhz.style.display = 'none';
                dengluhz.style.display = 'block';
                document.querySelector('.yhmhz').innerHTML = localStorage.getItem('yhm');

            };
            exit.onclick = function() {
                morenhz.style.display = 'block';
                dengluhz.style.display = 'none';
                localStorage.removeItem('yhm')
            }

        },

    }
});