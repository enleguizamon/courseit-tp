const settings = {
    infinite: true,
    variableWidth: true,
    accesibility: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 600,
        settings: "unslick"
    }
    ]    
};

const carrousel = $(".series");

$(document).ready(function(){
    carrousel.slick(settings);
})
      
$(window).on('resize', function() {
   if( $(window).width() > 600 &&  !carrousel.hasClass('slick-initialized')) {
    carrousel.slick(settings);
    }
});

