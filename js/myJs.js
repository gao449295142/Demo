	$(document).ready(function() {
       $('#btn').click(function(event){
		   $('#mask').fadeIn(300);
		   $('#yhjBox').animate({bottom:'0'});  
		  event.stopPropagation();
		});
		$(document).click(function(e){
			var target = $(e.target);
			if(target.closest('#yhjBox').length==0){
			$('#mask').fadeOut(300);
			$('#yhjBox').animate({bottom:'-64%'}); 
			}
		});
		$('.yhjBtn').click(function(){
			$('#mask').fadeOut(300);
			$('#yhjBox').animate({bottom:'-64%'});
		})
    });
