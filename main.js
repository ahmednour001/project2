$(function () {
'use strict';
    //just back height
    var winH = $(window).height(),
        navH = $('.navbar').innerHeight();
    
    $('.backhead').height(winH - (navH));    
   
});