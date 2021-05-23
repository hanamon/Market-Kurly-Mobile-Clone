$(function(){ //formLogin.js
	
	/*	
		체크박스 - ( 아이디 저장 / 자동 로그인 / 보안접속 )
		체크 (클릭 또는 체인지[change]) 하면 체크 표시 추가클래스 addClass();
		현재 체크인지 아닌지 구분 prop() attr();
		prop() or attr() 체크박스 라디오 박스를 체크를 변경 할 수 있다.
	
		chkVal[0]  = $('.checkBox').eq(0).val(); 			// 값 :: value 자바스크립트
		chkProp[0] = $('.checkBox').eq(0).prop('checked'); //논리값 :: true, false
		
		chkVal[1]  = $('.checkBox').eq(1).val(); 			
		chkProp[1] = $('.checkBox').eq(1).prop('checked'); 
		
		chkVal[2]  = $('.checkBox').eq(2).val(); 			
		chkProp[2] = $('.checkBox').eq(2).prop('checked'); 
		
		console.log(chkVal, chkProp);
	*/
	
	var chkProp = [];
			
	$('.logInChk').eq(0).prop('checked', true).addClass('addCheck');
	$('.logInChk').eq(2).prop('checked', true).addClass('addCheck');
	
	$('.logInChk').each(function(idx){
		$(this).on({
			click: function(){
				if( $(this).prop('checked') == true ){
					$(this).addClass('addCheck');
				}
				else{
					$(this).removeClass('addCheck');
				}
			}
		});
	});
	
}); //formLogin.js



























