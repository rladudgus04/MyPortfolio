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
            $(e.currentTarget).stop().animate({'margin-left' : '100px'}, 100);   
        }, function(e){
            $(e.currentTarget).stop().animate({'margin-left' : '50px'}, 100);
        });


        
        
    });
    $(".bar-click").click(function(){
        $(".left-menu").stop().animate({'left' : '0'},200);
    });

    $(".menu-close").click(function(){
        $(".left-menu").stop().animate({'left' : '-40%'}, 200);
    })
};