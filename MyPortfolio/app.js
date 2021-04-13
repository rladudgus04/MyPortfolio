window.onload = function(){
    $(".slideinleft").eq(0).hide();
    $(".slideinleft").eq(0).css({ 'margin-left': '0px' });
    $(".slideinleft").eq(0).fadeIn(1000);
    $(window).scroll(function () {
        $('.slideinleft').each(function (i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0px' }, 1000);
            }

        });
        $(".deemo-pro").hover(function(e){
            $(e.currentTarget).stop().animate({'margin-left' : '70px'}, 100);   
        }, function(e){
            $(e.currentTarget).stop().animate({'margin-left' : '50px'}, 100);
        });


        
        
    });
    let status = false;
    $(".bar-click").click(function(){
        if(status != true){
            $(".left-menu").stop().animate({'right' : '0'},200);
            status = true;
        }else {
            $(".left-menu").stop().animate({'right' : '-40%'}, 200);
            status = false;
        }
    });

    $(".menu-close").click(function(){
        status = false;
        $(".left-menu").stop().animate({'right' : '-40%'}, 200);
    });
    
    $(document).ready(function(){
        $('.slick-container').slick({
            speed: 1000,
            fade: true,
            arrows: true
        });
        
    });
    
    
    $(".left-menu").click(function(e){
        console.log(e.target.dataset.menu);
        var offset = $(`.${e.target.dataset.menu}`).offset();
        $("html").animate({'scrollTop' : `${offset.top}`}, 400);
        console.log(offset.top);
    });

    var menuP =  $(".menu-project-list");

    menuP.hide();

    $(".pro").hover(function(){
        menuP.fadeIn(100);
    }, function(){
        menuP.fadeOut(100);
    });
};
