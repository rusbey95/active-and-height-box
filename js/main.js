//add and remove class
$(function(){
    $('.btn_full').click(function(){
        $('.box_vertical').toggleClass('active');
    });
});

//height info
var h = $('.box_vertical').css('height');
console.log(h);