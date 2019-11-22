require.config({
    paths: {
        jquery: "./jquery-1.11.3",
        newregister: "./newregister",
    }
});
require(['jquery', 'newregister'], function(jqquery, newregister) {
    $('#foot').load('./foot.html');
    newregister.register();
})