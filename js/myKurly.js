$(function(){ //member.js
	
	var _link = '';
	
/*----------------------------------------------------------------------------------------------*/	

	// 팝업창 닫기
	$('.hPopupCloseBt').on({
		click: function(){
			$('#header-popup').slideUp(300);
		}
	});
	
/*----------------------------------------------------------------------------------------------*/	
	
	// 이동하기 ( 마이컬리닫기/아이디찾기/비밀번호찾기 )
	$('.moveBtn').on({
		click: function(){
			_link = $(this).attr('href');
			location.href = _link;
		}
	});
	
	// 회원가입 
	$('.gaibBtn').on({
		click: function(){
			location.href = 'memberGaib.html';
		}
	});

/*----------------------------------------------------------------------------------------------*/
	
	// ( 회원, 비회원 )텝 메뉴 버튼 이벤트
	$('.navBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.navBtn').removeClass('addNavBtn');
				$(this).addClass('addNavBtn');
				
				$('.form-member').stop().hide(0);
				$('.form-member').eq(idx).stop().show(0);
			}
		});
	});
	
}); //member.js