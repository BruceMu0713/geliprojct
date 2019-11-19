require.config({
    paths: {
        jquery: "./jquery-1.11.3",
        xiangqing: "./xiangqing",
        magnifier: "./magnifier",
        cookie: "./cookie"
    }
});
require(['xiangqing', 'magnifier'], function(xiangqing, magnifier) {
    xiangqing.render(function(id, price, title) {
        $('.addCart').on('click', function() {
            xiangqing.additem(id, price, title, $('#num').val())
        })
    });

})