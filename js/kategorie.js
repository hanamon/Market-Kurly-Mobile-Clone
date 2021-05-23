$(function(){ //kategorie.js
	
	var goTop = 0;
	var _link = '';
	
/*----------------------------------------------------------------------------------------------*/	
	
	// 고탑 버튼
	$(window).scroll(function(){
		if( $(window).scrollTop() > 300 ){
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
	
	// 헤더 베너 하이드
	$('.headerBannerColseBtn').on({
		click: function(){
			$('.header-banner').slideUp(300);
			$('#content').addClass('addHeaderBanner');
		}
	});
	
/*----------------------------------------------------------------------------------------------*/	
	// 이동하기 ( 푸터 버튼 )
	$('.moveBtn').on({
		click: function(){
			_link = $(this).attr('href');
			location.href = _link;
		}
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

	// 메뉴 버튼
	$('.mainMenuBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.mainMenuBtn').not(this).removeClass('addMeinBtn');
				$(this).toggleClass('addMeinBtn');
				
				$('.mainMenuBtn').not(this).parent().find('.subMenu-hidden-box').slideUp(0);
				$(this).parent().find('.subMenu-hidden-box').slideToggle(0);
			}
		});
	});

/*----------------------------------------------------------------------------------------------*/

}); //kategorie.js




























