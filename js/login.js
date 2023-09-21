$(document).ready(function(){

	//스크롤 없이 화면 100% 설정 
	$('#loginContainer').fullpage({
		licenseKey :  '23A35FB6-E2DA4218-8D33335A-8DCF44A2', 
		verticalCentered: true,
		sectionsColor: ['#000']
	});

	//window height에 따른 여백 조정
	var wHeight = $(window).height();
			
	if(wHeight < 800 ){	
		$('.section.login .page .inr').css('padding-top' , '70px').css('padding-bottom' , '20px');
	} else {
		$('.section.login .page .inr').css('padding-top' , '167px').css('padding-bottom' , '100px');
	}

	$(window).on('resize' , function(){
		var wHeight = $(window).height();

		if(wHeight < 800 ){	
	    	$('.section.login .page .inr').css('padding-top' , '70px').css('padding-bottom' , '20px');;
		} else {
		    $('.section.login .page .inr').css('padding-top' , '167px').css('padding-bottom' , '100px');;
		}
	});
});