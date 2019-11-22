require.config({
    paths: { // 模块和路径
        jquery: "./jquery-1.11.3",
        // md5:"./jquery.md5",
        lunbo: "./lunbo",
        index: "./index",
        tab: "./tab",
        louti: "./louti",
        lazyload: "./jquery.lazyload"

    },
    // 依赖环境
    shim: {
        // md5:['jquery']
    }
});

require(['jquery', 'lunbo', 'index', 'tab', 'louti', 'lazyload'], function($, lunbo, index, tab, louti, lazyload) {
    $('#slider').Slider();
    index.render();
    index.login1();
    $('.Nav_classify').tabs();
    louti.louti();
    $("img.lazy").lazyload({
            effect: "fadeIn"
        })
        // $('.Nav_classify').tabs();
});