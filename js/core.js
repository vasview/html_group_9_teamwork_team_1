$(document).ready(function(){

	$('#menu-btn').click(function(){		
			$('.menu').slideToggle(700);	
			if ($(this).hasClass('not-active')) {
				$(this).addClass('is-active').removeClass('not-active');
			}else{
				setTimeout(function(){
					$('.is-active').addClass('not-active').removeClass('is-active')
				},600)			
			}		
		});		

			var $grid = $('.article-blogs').isotope({
		  
		});
		
			$('#blog-filter').on( 'click', 'a', function() {
		  	var filterValue = $(this).attr('data-filter');
		  	$grid.isotope({ filter: filterValue });
		});
		
		$('.slider-block').slick({
    		arrows: true,
   		});


});

 	
	

	
  		

	
		
       
    	




	

