require.config({
    paths: { // 模块和路径
        jquery: "./jquery-1.11.3",
        // md5:"./jquery.md5",
        lunbo: "./lunbo"
    },
    // 依赖环境
    shim: {
        // md5:['jquery']
    }
});

require(['jquery', 'lunbo'], function($, lunbo) {
    $('#slider').Slider()
});
// require(['jquery', 'reg'], function($, reg) {
//     reg.regEv('.reg');
// })