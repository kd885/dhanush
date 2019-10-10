var headerHeight=0;
(function () {
    // $(".owl-item.o-box").mouseover(function () {        
    //     $(this).find(".btn-hover").addClass("btn-hover2");
    // });
    // $(".owl-item.o-box").mouseout(function () {        
    //     $(this).find(".btn-hover").removeClass("btn-hover2");
    // });


    $('.owl-carousel-1').owlCarousel({
        autoplay:true,
        autoplayHoverPause:false,
        dots: false,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
            }
        }
    });
    $('.owl-carousel-2').owlCarousel({
        dots: false,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,
            }
        }
    });
    $('.owl-carousel-3').owlCarousel({
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,      
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false,
            },
            600: {
                items: 1,
                nav: false,
                dots: false,
            },
            1000: {
                items: 1,
                nav: false,
                dots: true,
            }
        }
    });

    $(window).scroll(function(){
        headerHeight =  $('header').height();
        if($(this).scrollTop() > $('.banner-sec').offset().top + $('.banner-sec').outerHeight()){
            $('header').addClass('fixed');
            $('header').addClass('innerHeader');
            headerHeight =  $('header').height();
        }
        else{
            if(document.title.includes('Home')){
                $('header').removeClass('innerHeader');
            }
            $('header').removeClass('fixed');
            headerHeight =  $('header').height();
        }
    });

    if(location.href.includes('#')){
        let idFromel = location.href.split('#').pop();
        console.log(idFromel);
        $('html,body').animate({
            scrollTop:$('#'+idFromel).offset().top - 100
        }, 1000);
        $('#navbarSupportedContent').attr("aria-expanded", 'false');
        $('#navbarSupportedContent').removeClass('show');
    }

})();

function scrollToBottom(e, el){
    let idFromel = $(el).attr('href');
    // e.preventDefault();
    $('html,body').animate({
        scrollTop:$(idFromel).offset().top - 100
    }, 1000);
    $(el).attr("aria-expanded", 'false');
    $('#navbarSupportedContent').attr("aria-expanded", 'false');
    $('#navbarSupportedContent').removeClass('show');
}