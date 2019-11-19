define(['jquery'], function() {
    return {
        carts: function() {
            var $allCheckbox = $('input[type="checkbox"]'), //全局的全部checkbox
                $wholeChexbox = $('.allbox'), //全选按钮
                $shopCheckbox = $('.shopid'), //商铺盒子

                $cartBox = $('.mainshopbox'), //每个商铺盒子
                $sonCheckBox = $('.probtn'), //单个盒子按钮
                $deepbox = $('.deepbtn') //底部全选按钮
                //================全选效果

            $allCheckbox.on('click', function() {
                if ($(this).is(':checked')) { //全选被选中
                    $(this).prop('checked', true); //设置属性
                } else {
                    $(this).prop('checked', false); //设置属性
                }
            });
            //========全局全选与单个商品关系=====

            $wholeChexbox.click(function() {
                var $checkboxs = $cartBox.find('input[type="checkbox"]');
                if ($(this).is(':checked')) {
                    $checkboxs.prop("checked", true);

                } else {
                    $checkboxs.prop("checked", false);

                }
                totalMoney();
            });

            // =====单选框单选
            $sonCheckBox.each(function() {
                $(this).click(function() {
                    if ($(this).is(':checked')) {
                        //判断：所有单个商品是否勾选
                        var len = $sonCheckBox.length;
                        var num = 0;
                        $sonCheckBox.each(function() {
                            if ($(this).is(':checked')) {
                                num++;
                            }
                        });
                        if (num == len) {
                            $wholeChexbox.prop("checked", true);

                        }
                    } else {
                        //单个商品取消勾选，全局全选取消勾选
                        $wholeChexbox.prop("checked", false);

                    }
                })
            });
            // 旗舰店
            $shopCheckbox.each(function() {
                $(this).click(function() {
                    if ($(this).is(':checked')) {
                        //判断：店铺全选中，则全局全选按钮打对勾。
                        var len = $shopCheckbox.length;
                        var num = 0;
                        $shopCheckbox.each(function() {
                            if ($(this).is(':checked')) {
                                num++;
                            }
                        });
                        if (num == len) {
                            $wholeChexbox.prop("checked", true);

                        }

                        //店铺下的checkbox选中状态
                        $(this).parents('.mainshopbox').find('.probtn').prop("checked", true);

                    } else {
                        //否则，全局全选按钮取消对勾
                        $wholeChexbox.prop("checked", false);

                        //店铺下的checkbox选中状态
                        $(this).parents('.mainshopbox').find('.probtn').prop("checked", false);

                    }
                    totalMoney();
                });
            });
            // ==========店铺有一个为全选设置

            $cartBox.each(function() {
                var $this = $(this);
                var $sonChecks = $cartBox.find('.probtn');
                $sonChecks.each(function() {
                    $(this).click(function() {
                        if ($(this).is(':checked')) {
                            //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
                            var len = $sonChecks.length;
                            var num = 0;
                            $sonChecks.each(function() {
                                if ($(this).is(':checked')) {
                                    num++;
                                }
                            });
                            if (num == len) {
                                $(this).parents('.mainshopbox').find('.shopid').prop("checked", true);

                            }

                        } else {
                            //否则，店铺全选取消
                            $(this).parents('.cartBox').find('.shopid').prop("checked", false);

                        }
                        totalMoney();
                    });
                });
            });
            // ======商品数量=====
            var $plus = $('#adbtn'),
                $reduce = $('#rebtn'),
                $all_sum = $('.p-quantity');
            $plus.click(function() {
                var $inputVal = $(this).prev('input'),
                    $count = parseInt($inputVal.val()) + 1,
                    $obj = $(this).parents('.amount_box').find('#rebtn'),
                    $priceTotalObj = $(this).parents('.listBox').find('.danjia'),
                    $price = $(this).parents('.listBox').find('.danjia1').html(), //单价
                    $priceTotal = $count * parseInt($price.substring(1));
                $inputVal.val($count);
                $priceTotalObj.html('￥' + $priceTotal);
                if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
                    $obj.removeClass('reSty');
                }
                totalMoney();
            });

            function totalMoney() {
                var total_money = 0;
                var total_count = 0;
                var calBtn = $('#btnDisBlock button');
                $sonCheckBox.each(function() {
                    if ($(this).is(':checked')) {
                        console.log($(this).parents('.listBox').find('.danjia').html());
                        var goods = parseInt($(this).parents('.listBox').find('.danjia').html().substring(1));
                        var num = parseInt($(this).parents('.listBox').find('.p-quantity').val());
                        total_money += goods;
                        total_count += num;
                        console.log(total_money);
                        console.log(total_count);
                    }
                });


                $('#zongjia').html(total_money);
                $('.allnum').html(total_count);

                // console.log(total_money,total_count);

                // if (total_money != 0 && total_count != 0) {
                //     if (!calBtn.hasClass('btn_sty')) {
                //         calBtn.addClass('btn_sty');
                //     }
                // } else {
                //     if (calBtn.hasClass('btn_sty')) {
                //         calBtn.removeClass('btn_sty');
                //     }
                // }
            }
        }
    }
})