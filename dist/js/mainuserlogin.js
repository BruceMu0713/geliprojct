"use strict";require.config({paths:{jquery:"./jquery-1.11.3",userlogin:"./userlogin"}}),require(["jquery","userlogin"],function(e,o){$("#foot").load("./foot.html"),o.login()});