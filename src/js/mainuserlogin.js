require.config({
    paths: {
        userlogin: "./userlogin",
    }
});
require(['userlogin'], function(userlogin) {
    userlogin.login();

});