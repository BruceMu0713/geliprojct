// 
//  tab.js
//  
//  
//  Created by Administrator on 2019-02-21.
//  Copyright 2019 Administrator. All rights reserved.
// 

//通过配置参数 和  默认参数实现传参
//通过自定义属性进行传参
//console.log(eval('('+document.querySelector('.tab').getAttribute('data-tab')+')'));
define(['jquery'], function($) {
    return {
        tabs: (function($) {
            $.fn.extend({
                tabs: function(options) {
                    let defaults = {
                        event: 'mouseover',
                        btn: 'actived',
                        content: 'show'
                    };

                    $.extend(defaults, options); //合并对象
                    // console.log(this); // 通过当前jQuery对象进行元素查找
                    let oBtn = this.children('ul').children('li');
                    let oDiv = $('.classify_list1');
                    console.log(oBtn);

                    console.log(oDiv);

                    oBtn.on(defaults.event, function() {
                        let index = oBtn.index(this);
                        $(this).addClass(defaults.btn).siblings().removeClass(defaults.btn);
                        oDiv.eq(index).addClass(defaults.content).siblings().removeClass(defaults.content);
                    });
                    oDiv.each(function() {
                        let _this = $(this);
                        oBtn.on('mouseout', function() {

                            _this.css("display", "none")
                        })
                    })

                }
            });
        })(jQuery)
    }
})