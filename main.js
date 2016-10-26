$(document).ready(function(){
    
    setTimeout(function(){
        $('.wrapper').addClass('loaded');
    }, 2000);
    
    setTimeout(function(){
        $('.loader').addClass('shrinkDown');
    }, 2000);
    
    $('.menuOpen').click(function(){
        $('.menu').fadeIn(500); 
        $('.wrapper').addClass('smaller');
    });
    
    $('.menu .close').click(function(){
        $('.menu').fadeOut(500); 
        $('.wrapper').removeClass('smaller');
        $('.wrapper').addClass('normal').delay(600).removeClass('normal');
    });
    
    $('.checkOut').click(function() {
        var target = $(this).data('target');
        $('.content').addClass('inactive');
        $(target).addClass('active').removeClass('inactive');
    });
    
    $('.menu a').click(function() {
        var target = $(this).data('target');
        $('.content').addClass('inactive');
        $(target).addClass('active').removeClass('inactive');
        $('.menu').fadeOut(500);
        $('.wrapper').removeClass('smaller');
    });
    
    $('#home .left a').hover(
           function(){ $('.left').addClass('hover') },
           function(){ $('.left').removeClass('hover') }
    );
    
    $('#home .left .irecruit').hover(
           function(){ $('#home .right').addClass('activeRight') },
           function(){ $('#home .right').removeClass('activeRight') }
    );
    
    $('#home .left .irecruit').hover(
           function(){ $('.phone').addClass('phoneActive') },
           function(){ $('.phone').removeClass('phoneActive') }
    );
    
    $('#home .left .irecruit').hover(
           function(){ $('#home .right .title').addClass('titleActive') },
           function(){ $('#home .right .title').removeClass('titleActive') }
    );
   
   
   // SETTING PORTFOLIO DIVS SIZES
   
    //var screenHeight = $(document).height();
    //var screenWidth = $(document).width();
   
   //if (screenWidth > 800) {
   //     $('#portfolio .work').css('height', screenHeight);
   //} 
   
});
            
