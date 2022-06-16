
$('#btn-hide').click(function(){
    $('.info').slideToggle();
});

$("#menubtn").click(function(){
    $(".left-menu-adaptive").slideToggle();
    $('.right-menu-adaptive').hide();      
});

$("#personbtn").click(function(){
    $(".right-menu-adaptive").slideToggle();
    $('.left-menu-adaptive').hide();      
});

$('.shop-carousel').each(function () {
    var owl = $(this).find('.owl-carousel').owlCarousel({
        loop:true,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
      
    $(this).find('#btn-left').on('click', function () {
        owl.trigger('prev.owl.carousel');
    });
      
    $(this).find('#btn-right').on('click', function () {
        owl.trigger('next.owl.carousel');
    });
});

$(document).ready(function($) {
    $('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});
	
	$('.popup-close-btn').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

});

$('#btn-submit').click(function(e){
    e.preventDefault();
});


