require.config({
    paths: {
        jquery: "./jquery-1.11.3",
        xiangqing: "./xiangqing",
        magnifier: "./fangdajing"
    }
});
require(['xiangqing', 'fangdajing'], function(xiangqing, fangdajing) {
    xiangqing.render();

})