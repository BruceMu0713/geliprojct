require.config({
    paths: {
        jquery: "./jquery-1.11.3",
        cookie: "./cookie",
        cart: "./cart",
        carts: "./carts"
    }
});
require(['jquery', 'cart', 'carts'], function($, cart, carts) {
    cart.render();
})