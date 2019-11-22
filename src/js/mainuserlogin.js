require.config({
    paths: {
        jquery: "./jquery-1.11.3",
        userlogin: "./userlogin"
    }
});
require(['jquery', 'userlogin'], function(jquery, userlogin) {
    $('#foot').load('./foot.html');
    userlogin.login();

});