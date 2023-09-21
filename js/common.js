$(document).ready(function(){

	// -------------------------------- HEADER --------------------------------

	//header : scrolldown시 스타일 변경 , 상단으로 가기 버튼 활성화
	$(window).on("scroll", function(event){

		var scrollTop = $(window).scrollTop();
		if( scrollTop > 0 ){
			$("#header").addClass('scroll-down');
			$('#btnTop').stop().fadeIn(200);
		}else {
			$("#header").removeClass('scroll-down');
			$('#btnTop').stop().fadeOut(200);
		}
	});

	//header : gnb hover 효과 , depth2 있을때 처리 
	$('#gnb > li').on('mouseenter' , function(){
		$('#gnb > li').removeClass('on');
		$(this).addClass('on');
		$(this).find('.sub-menu').stop().fadeIn(300);
	});

	$('#gnb > li').on('mouseleave' , function(){
		$('#gnb > li').removeClass('on');
		$(this).find('.sub-menu').stop().fadeOut(300);
	});

	//header : 유저정보 클릭 이벤트
	$('#utilMenu .user-info a').on('click' , function(e){
		e.preventDefault();
		$('.info-box').stop().toggleClass('active');

		// navigation 비활성화
		if( $('#navi .depth2').css('display' , 'block') ){
			$('#navi .depth2').css('display' , 'none')
		}
		//번역메뉴 비활성화
		if( $('#utilMenu .lang').hasClass('active') ){
			$('#utilMenu .lang').removeClass('active');
		}
		//Header 외의 영역 클릭 시 창 닫기
		$('body').click(function(e){
           if( $('#header').has(e.target).length === 0 ){
                $('.info-box').stop().removeClass('active');
            }
        });
	});

	//header : 번역메뉴 
	$('#utilMenu .lang > a').on('click' , function(e){
		e.preventDefault();
		$(this).parent('.lang').stop().toggleClass('active' , 200);

		//유저정보창 비활성화
		if( $('.info-box').hasClass('active') ){
			$('.info-box').removeClass('active');
		}
		//navigation 비활성화
		if( $('#navi .depth2').css('display' , 'block') ){
			$('#navi .depth2').css('display' , 'none')
		}

		//Header 외의 영역 클릭 시 창 닫기
		$('body').click(function(e){
           if( $('#header').has(e.target).length === 0 ){
                $('#utilMenu .lang').stop().removeClass('active');
            }
        });
	});
	

	// -------------------------------- 전체메뉴 --------------------------------

	$('#btnAll').on('click', function(e){
		e.preventDefault();

		//유저정보창 비활성화
		if( $('.info-box').hasClass('active') ){
			$('.info-box').removeClass('active');
		}
		//navigation 비활성화
		if( $('#navi .depth2').css('display' , 'block') ){
			$('#navi .depth2').css('display' , 'none')
		}

		//번역메뉴 비활성화
		if( $('#utilMenu .lang').hasClass('active') ){
			$('#utilMenu .lang').removeClass('active');
		}

		$('#allMenu').addClass('active');
		$('.dimm').addClass('transparent').stop().show();

		//닫기버튼 클릭 시 창닫기
		$('#allMenu .btn-close').on('click' , function(){
			$('#allMenu').removeClass('active');
			$('.dimm').removeClass('transparent').stop().hide();
			$('.depth2').stop().slideUp();
			$('#allMenu .all-list > li > a').removeClass('on');
		});

		//전체보기 메뉴 이외의 영역 클릭 시 창 닫기
		$('.dimm').on('click' , function(){
			$(this).removeClass('transparent').stop().hide();
			$('#allMenu').removeClass('active');
			$('.depth2').stop().slideUp();
			$('#allMenu .all-list > li > a').removeClass('on');
		});

	});

	//전체메뉴 : depth2 가 있는 메뉴 처리
	if($('#allMenu .all-list > li').has('depth2')){
		//depth2가 있을 경우, 화살표 추가
		$('.depth2').parent().children('a').addClass('arrow');

		//depth2가 포함된 메뉴 클릭 시
		$('#allMenu .all-list > li > a').on('click', function(e){
			$('.depth2').stop().slideUp();
			$(this).parent().siblings().find('a').removeClass('on');

			$(this).next().stop().slideToggle();
			$(this).toggleClass('on');
		});
	}

	// -------------------------------- BTN TOP --------------------------------

	$("#btnTop").on('click' , function(e) {
        $('html').animate({scrollTop : 0}, 300);
    });

	// -------------------------------- NAVIGATION --------------------------------

	//SUB - navigation
	$('#navi > ul > li > span').on('click' , function(){
		$(this).next().stop().slideToggle();

		//유저정보창 비활성화
		if( $('.info-box').hasClass('active') ){
			$('.info-box').removeClass('active')
		}
		//번역기 비활성화
		if( $('#utilMenu .lang').hasClass('active') ){
			$('#utilMenu .lang').removeClass('active');
		} 
		
	});

	// -------------------------------- POPUP --------------------------------
			
	// SUB : 레이어 팝업(기본형 , 풀사이즈)
    $('.js-open').click(function(e) {
        e.preventDefault();        
        var activeLayer = $(this).attr('data-pop');
        var wHeight = $(window).height();
        
        $('.popType1').addClass('hidden'); //모든 팝업 감추기
        $('#' + activeLayer).removeClass('hidden'); //호출한 팝업만 부르기
        $('.dimm').stop().show().css('z-index' , '30'); //배경 가져오기

        //닫기 버튼 , 배경 클릭 시
        $('.js-close , .dimm').on('click' , function(){
            $('.popType1').addClass('hidden');//모든 팝업 감추기
            $('.dimm').stop().hide().css('z-index' , '11'); //배경 감추기
        });
    });

	//SUB - 레이어 팝업2(참고사항)
	$('.btn-note').on('click' , function(e){
		e.preventDefault();
		var activeLayer = $(this).attr('data-pop');

		$('.btn-note').stop().removeClass('active');
		$('.note-box').stop().removeClass('active'); 
		$(this).stop().addClass('active');
		$('#' + activeLayer).stop().addClass('active');

		$('.note-box .btn-close').on('click' , function(){
			$(this).parent().stop().removeClass('active');
			$(this).parent().parent().find('.btn-note').removeClass('active');
		});
	});	

	//SUB - 레이어 팝업3(데이터 세팅)
	$('.btn-set').on('click' , function(e){
		e.preventDefault();

		$(this).parent().siblings().find('.btn-set').removeClass('active');
		$(this).parent().siblings().find('.popType2').removeClass('active');
		$(this).toggleClass('active');
		$(this).next('.popType2').toggleClass('active');

		$('.btn-popclose').on('click' , function(){
			$(this).parent().parent().removeClass('active');
			$(this).parent().parent().siblings().removeClass('active');
		});
	});

	// -------------------------------- SUB PAGES --------------------------------

	//SUB - tab 기능
	$('.tabType1 a').on('click' , function(e){
		var activeTab = $(this).attr('data-tab');
		
		e.preventDefault();
		//탭메뉴 초기화
	    $('.tabType1 a').parent().removeClass('active');
		$('.tab-contents').removeClass('active');
		//FAQ 아코디언 메뉴 초기화
		$('.answer-box').stop().slideUp();
		$('.question-area > li').stop().removeClass('active');

		$(this).parent().addClass('active');
		$('#' + activeTab).addClass('active');
	 });

	//SUB - side bar tab 기능
	$('#snb a').on('click' , function(e){
		var activeTab = $(this).attr('data-tab');
		
		e.preventDefault();
		//탭메뉴 초기화
	    $('#snb a').removeClass('active');
		$('.row-group.tab').removeClass('active');

		$(this).addClass('active');
		$('#' + activeTab).addClass('active');
	 });

	//SUB - FAQ 아코디언 메뉴 클릭 이벤트
	$('.question-area .question-box').on('click' , function(){
		//초기화
		$(this).parent().siblings().stop().removeClass('active');
		$('.answer-box').stop().slideUp();

		$(this).next().stop().slideToggle();
		$(this).parent().toggleClass('active');
	});

	//SUB - LNB 200601 이정민 추가
	$('#lnb > ul > li > a').on('click' , function(e){
		$(this).parent().siblings().removeClass('on , active');
		$(this).parent().siblings().find('.depth2').stop().slideUp();

		$(this).parent().addClass('active');
		$(this).next('.depth2').stop().slideDown();
	 });
});