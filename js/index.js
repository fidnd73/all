$(document).ready(function (){

  $(".menu").hover(function(){
    $(this).find(".sub_menu").stop().slideDown();

  },function(){
    $(this).find(".sub_menu").stop().slideUp();

  });

  $(".title").click(function(){

    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();

  });

  $(".tab li").click(function(){

    let num = $(this).index();
    let move = 160*num;

    $(".tab-header .tab-highlight").animate({left:move});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents .contents").removeClass("active");
    $("#" + result).addClass("active");

  });

});

