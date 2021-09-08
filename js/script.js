$(document).ready(function(){
    $('header .bar ul li a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.number span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        
    })
    $('.buisness .box span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        
    })

    $('.number span:nth-child(1)').click(function(){
        $(".news-container").show();
        $(".news-container2").hide();
        
    })
    $('.number span:nth-child(2)').click(function(){
        $(".news-container2").show().css({"display":"flex"});
        $(".news-container").hide();
                
    })

    $('.buisness .box span:nth-child(1)').click(function(){
        $(".buisness .content").fadeIn();
        $(".buisness .content2").fadeOut();
        
    })
    $('.buisness .box span:nth-child(2)').click(function(){
        $(".buisness .content2").fadeIn().css({"display":"flex"});
        $(".buisness .content").fadeOut();
        
    })


    $("#menuicon").click(function(){
        $(this).toggleClass('fa-times');
        $('.bar').toggleClass('nav-toggle');
    })
$(window).on('load scroll',function(){
    $('#menuicon').removeClass('fa-times');
    $('.bar').removeClass('nav-toggle');
    $('section').each(function(){

        let top = $(window).scrollTop();
        let   height = $(this).height();
        let   id = $(this).attr('id');
        let    offset = $(this).offset().top - 100;
        
        if(top > offset && top < offset + height){
            $('header .bar ul li a').removeClass('active');
            $('.bar').find(`[href="#${id}"]`).addClass('active');
        }

    });
    
});
})