$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY >  500){
            $('.scoll-up-btn').addClass("show");
        }else{
            $('.scoll-up-btn').removeClass("show");
        }
    });

    $('.scoll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings :["Developer", "Designer", "Programmer","Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-1", {
        strings :["Developer", "Designer", "Programmer","Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });


    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
   

    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // });
});