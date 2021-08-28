$(function(){ //script.js
	
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
	
	// 이동하기 ( 푸터 버튼 )
	$('.moveBtn').on({
		click: function(){
			_link = $(this).attr('href');
			location.href = _link;
		}
	});

/*----------------------------------------------------------------------------------------------*/	
	
	// 헤더 베너 하이드
	$('.headerBannerColseBtn').on({
		click: function(){
			$('.header-banner').slideUp(300);
			$('#content').addClass('addHeaderBanner');
		}
	});
	
	// 헤더 메인 버튼 에드클레스
	$('.mainBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.mainBtn').removeClass('addMainBtn');
				$(this).addClass('addMainBtn');
				$('.header-nav>ul>li>a>i').stop().animate({left:(20*idx)+'%'}, 300, 'easeInOutCirc');
				
				$('html, body').animate({scrollTop: 0}, 0);
				$('#content').children('div').hide();
				$('#content').children('div').eq(idx).show();
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
	
	// 푸터 베너 하이드 
	$('.footBannerCloseBtn').on({
		click: function(){
			$('.footer-banner').slideUp(300).css({top:0, transition:'all 0.3s'});
		}
	});
	
/*----------------------------------------------------------------------------------------------*/	
	
	// 컨텐츠2
	$('.name-select-btn').on({
		click: function(){
			$(this).toggleClass('addMenuList');
			$(this).parent().find('.content2-menu-list').toggleClass('addMenuList');
		}
	});

/*----------------------------------------------------------------------------------------------*/	

}); //script.js