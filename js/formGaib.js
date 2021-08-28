$(function(){ //formGaib.js
	
	var cnt  = 0; // 서브체크 모두 카운트
 	var cnt2 = 0; // SMS, 이메일만 카운트
	
/*-------------------------------------------------------------------------------------------------------------------*/	
	
	// 메인체크박스 체크 될려면
	// 7개의 서브체크박스가 모두 체크되면 메인체크박스 체크된다.
	function allCheckFn(){
		cnt = 0;
		$('.gaibChk').each(function(idx){
			if( $('.gaibChk').eq(idx).prop('checked') == true ){
				cnt++; // 체크된 상잘자를 개수 센다.
			}
			if( cnt >=7 ){ // 모두 체크되면 메인체크박스가 체크된다.
				$('.agreeAllCheckBtn').prop('checked', true).addClass('addAgreeAllCheck');
			}
			else{
				$('.agreeAllCheckBtn').prop('checked', false).removeClass('addAgreeAllCheck');
			}
		});
	}
	
/*-------------------------------------------------------------------------------------------------------------------*/	
	
	// 모두 체크 박스를 클릭[change]하면 모든 체크박스 체크함.
	$('.agreeAllCheckBtn').on({
		change: function(){
			if( $(this).prop('checked') == true ){ // 체크 선택 하면 
				$(this).addClass('addAgreeAllCheck');
				$('.gaibChk').prop('checked', true).addClass('addAgreeCheck');
			}
			else{ // 체크 해제 하면
				$(this).removeClass('addAgreeAllCheck');
				$('.gaibChk').prop('checked', false).removeClass('addAgreeCheck');
			}
			allcheck4Fn();
			allCheckFn();
		}
	});
	
	// 어그리 체크박스
	$('.gaibChk').on({
		click: function(){
			if( $(this).prop('checked') == true ){
				$(this).prop('checked', true).addClass('addAgreeCheck');
			}
			else{
				$(this).prop('checked', false).removeClass('addAgreeCheck');
			}
			allCheckFn();
		}
	});
	
/*-------------------------------------------------------------------------------------------------------------------*/	
	
	// 무료배송, 할인쿠폰 (이용약관동의) 중간 체크 박스 [천체동의]
	// SMS, 이메일 - 서브체크 박스  2개 모두 체크되어야 바로 위의 상의 메인체크박스가 체크된다. 
	// 반드시 메인체크박스의 이름은 독립된 유일한 이름으로 설정하고
	// 서브체크박스는 또다른 동일한 클래스로 설정한다. $('#allReceptionCheck') -- $('.gaibChk4')
	
	function allcheck4Fn(){
		cnt2 = 0; // (클릭(체인지[change])가 발생 할 때 마다) 함수를 호출 할 때마다 초기화
		
		$('.gaibChk4').each(function(idx){
			if( $('.gaibChk4').eq(idx).prop('checked') == true ){
				cnt2++;
			}
			if( cnt2 >= 2 ){ // 모두 체크 되면
				$('#allReceptionCheck').prop('checked', true).addClass('addAgreeCheck');
			}
			else{
				$('#allReceptionCheck').prop('checked', false).removeClass('addAgreeCheck');
			}
		});
	}
	
/*-------------------------------------------------------------------------------------------------------------------*/	
	
	// 중간에 있는 메인 체크 박스 Change Event
	// 메인체크박스 체크되면 하위 서브체크박스 2개 ( SMS, 이메일 ) 모두 체크
	$('#allReceptionCheck').on({
		change: function(){
			if( $(this).prop('checked') == true ){
				$(this).prop('checked', true).addClass('addAgreeCheck');
				$('.gaibChk4').prop('checked', true).addClass('addAgreeCheck');
			}
			else{
				$(this).prop('checked', false).removeClass('addAgreeCheck');
				$('.gaibChk4').prop('checked', false).removeClass('addAgreeCheck');
			}
			allcheck4Fn();
			allCheckFn();
		}
	});
	
	// 서브체크박스 2개 체크하고 모두 체크되면 메인체크박스 체크된다.
	$('.gaibChk4').on({
		change: function(){
			if( $(this).prop('checked') == true ){
				$(this).prop('checked', true).addClass('addAgreeCheck'); 
			}
			else{
				$(this).prop('checked', false).removeClass('addAgreeCheck'); 
			}
			allcheck4Fn(); // 2개 체크 먼저하고
			allCheckFn();  // 7개 체크 나중에 한다.
		}
	});
	
/*-------------------------------------------------------------------------------------------------------------------*/	

}); //formGaib.js