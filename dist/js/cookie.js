"use strict";define([],function(){return{get:function(e){if(document.cookie){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var o=t[n].split("=");if(o[0]===e)return o[1]}return""}},set:function(e,t,n){if(n){var o=new Date;o.setDate(o.getDate()+n),document.cookie=e+"="+t+";expires="+o+";path=/"}else document.cookie=e+"="+t+";path=/"},remove:function(e){this.set(e,"",-1)}}});