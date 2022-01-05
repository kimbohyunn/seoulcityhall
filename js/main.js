$(function(){
       var mainNews = new Swiper(".news01", {
        pagination: {
        el: ".news01 .swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".news01 .btn .next",
        prevEl: ".news01 .btn .prev",
        },
        loop: true,
        autoplay: {
            delay: 4000,
          },
    });
    
    $('.main_vis .btn .stop').click(function(){

        if($(this).hasClass('play')){
            $(this).removeClass('play');
            mainNews.autoplay.start();
          }else{
            $(this).addClass('play');
            mainNews.autoplay.stop();
          }
    })

    var swiper = new Swiper(".news02", {
        pagination: {
          el: ".news02 .swiper-pagination",
          type: "fraction",
        },
        loop: true,
        navigation: {
          nextEl: ".news02 .btn .next",
          prevEl: ".news02 .btn .prev",
        },
      });

    


    $('.main_vis .con').click(function(e){
        e.preventDefault();

        $('.main_vis .con').removeClass('on');
        $(this).addClass('on');

        link = $(this).attr('href');

        $('.swiper').removeClass('on');
        $(link).addClass('on')
    });



     var live = new Swiper(".sc09_slide", {
        slidesPerView: 3,
        spaceBetween: 43,
        pagination: {
          el: ".sc09_slide .swiper-pagination",
          type: "fraction",
        },
        loop: true,
        autoplay: {
            delay: 2500,
        },
        navigation: {
            nextEl: ".sc09_slide .next",
            prevEl: ".sc09_slide .prev",
        },
      });
      $('.sc09 .btn .stop').click(function(){
        if($(this).hasClass('play')){
            $(this).removeClass('play');
            live.autoplay.start();
          }else{
            $(this).addClass('play');
            live.autoplay.stop();
          }
       }); 

    $('.sc10 .menu').click(function(){

        if($(this).hasClass('on')){
            $('.sc10 .menu').removeClass('on')
            $('.sc10 .con').stop().slideUp();
        }else{
            $('.sc10 .menu').removeClass('on')
            $(this).addClass('on');
            $('.sc10 .con').stop().slideUp();
            $(this).find('.con').stop().slideDown();
        }
    })



    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('main').offset().top;

        if(curr >= target){
            $('aside img').addClass('on');
        }else{
            $('aside img').removeClass('on');
        }
    });

    $('aside a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000);
    })

});
