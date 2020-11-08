
$(".recipes__slider").slick({
                dots: true,
                arrows: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
        customPaging : function(slider, i) {
            return  $(slider.$slides[i]).attr('title') + '</a>';
        },
    });
    
