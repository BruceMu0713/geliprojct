require.config({
    paths: {
        newregister: "./newregister",
    }
});
require(['newregister'], function(newregister) {
    newregister.register()
})