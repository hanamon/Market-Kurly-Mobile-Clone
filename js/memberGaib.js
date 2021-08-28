$(function(){ //memberGaib.js
	
	var goTop = 0;
	var _link = '';
	
/*----------------------------------------------------------------------------------------------*/	

	// 고탑 버튼
	$(window).scroll(function(){
		if( $(window).scrollTop() > 500 ){
			$('#goTopBtn-wrap').show();
		}
		else{
			$('#goTopBtn-wrap').hide();
		}
		$('.goTopBtn').on({
			click: function(){
				goTop = $(this).attr('href');
				$('html,body').stop().animate({ scrollTop: $(goTop).offset().top-1000 }, 1000);
			}
		});
	});
	
/*----------------------------------------------------------------------------------------------*/
	
	// 서치 버튼 쇼, 하이드
	$('.footNavBtn').eq(2).on({
		click: function(){
			$('#modal-search-wrap').css({top : 0, opacity: 1, transition: 'all 0.3s'});
		}
	});
	
	$('.searchBoxCloseBtn').on({
		click: function(){
			$('#modal-search-wrap').css({top : '-100%', opacity: 0, transition: 'all 0.3s'});
		}
	});
	
	// 서치 버튼 텝
	$('.searchTabBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.searchTabBtn').removeClass('addSearchTabBtn');
				$(this).addClass('addSearchTabBtn');
				$('#search-keyword-LinkBtn-wrap').stop().hide();
				$('#search-keyword-LinkBtn-wrap').eq(idx).stop().show();
			}
		});
	});
	
/*----------------------------------------------------------------------------------------------*/	

	// 팝업창 닫기
	$('.hPopupCloseBt').on({
		click: function(){
			$('#header-popup').stop().slideUp(300);
			$('#content').addClass('addHeaderPopup');
		}
	});
	
	// 이동하기 ( 회원가입 뒤로가기/푸터 버튼 )
	$('.moveBtn').on({
		click: function(){
			_link = $(this).attr('href');
			location.href = _link;
		}
	});
	
/*----------------------------------------------------------------------------------------------*/	

	// 인풋 박스 히든 텍스트
	$('input').on({
		focusin: function(){
			$(this).parent().parent().parent().find('.hidden-text-wrap').stop().show(0);
			$('label').css({boxShadow:'none'});
		}
	});
	
	// 생년월일
	$('.birthBox').on({
		focusin: function(){
			$('.birth-input-wrap').css({border:'1px solid #000'});
		},
		focusout: function(){
			$('.birth-input-wrap').css({border:'1px solid #ccc'});
		}
	});
	
	// 성별
	$('.genderBtn').on({
		click: function(){
			$('.genderBtn').removeClass('addGenderBtn');
			$(this).addClass('addGenderBtn');
		}
	});
	
	// 추가입력 사항
	$('.addInputBtn').on({
		click: function(){
			$('.addInputBtn').removeClass('addAddInputBtn');
			$(this).addClass('addAddInputBtn');
			$('.hidden-inputBox-wrap').stop().hide(0);
			$(this).parent().parent().find('.hidden-inputBox-wrap').stop().show(0);
		}
	});
	
/*----------------------------------------------------------------------------------------------*/	

}); //memberGaib.js