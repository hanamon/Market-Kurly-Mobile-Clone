$(function(){ //ajaxPHPSQL.js
	
	var txtId 				 = '';  // 아이디(필수)
	var txtPass 			 = '';  // 비밀번호(필수)
	var txtPassChk 			 = '';  // 비밀번호 확인(필수)
	var txtName				 = '';  // 이름(필수)
	var txtEmail			 = '';  // 이메일
	var txtTel				 = '';	// 전화번호
	var txtBirthYear		 = '';	// 생년
	var txtBirthMonth		 = '';	// 월
	var txtBirthDate		 = '';	// 일
	var txtGender			 = '';	// 성별
	var txtAddInput			 = '';	// 추가입력사항
	
	var txtAgrmt_chk		 = '';	// 이용약관(필수)
	var txtPrivate_chk		 = '';	// 개인정보처리방침(필수)
	var txtConsentCheckValue = '';	// 개인정보처리방침(선택)
	var txtSmsCheck			 = '';	// 정보수신 SMS(선택)
	var txtEmailCheck		 = '';	// 정보수신 이메일(선택)
	var txtFourteen_chk		 = '';	// 본인은 만 14세 이상입니다.(필수)
	
	// 닷홈 서버에서
	// 웹앱 화면의 회원가입 정보를 입력하여
	// 전송버튼 클릭시 : -- AJAX를 실행, -- PHP & SQL 실행문을 구현
	// 데이터베이스 해당 테이블[idmember]에 저장 시킨다.
	
	$('.gaibBtn').on({
		click: function(){
			
			txtId 				 = $('#id').val();
			txtPass 			 = $('#pass').val();
			txtPassChk 			 = $('#passCheck').val();
			txtName 			 = $('#name').val();
			txtEmail			 = $('#email').val();
			txtTel				 = $('#inNumber').val();
			txtBirthYear		 = $('#birthYear').val();
			txtBirthMonth		 = $('#birthMonth').val();
			txtBirthDate		 = $('#birthDate').val();
			txtGender			 = $('.genderBtn').val();
			txtAddInput			 = $('.addInputBtn').val();

			txtAgrmt_chk		 = $('#agrmt_chk').val();
			txtPrivate_chk		 = $('#private_chk').val();
			txtConsentCheckValue = $('#consentCheckValue').val();
			txtSmsCheck			 = $('#smsCheck').val();
			txtEmailCheck		 = $('#emailCheck').val();
			txtFourteen_chk		 = $('#fourteen_chk').val();
			
			if( txtId=='' || txtName=='' || txtPass=='' || txtPassChk=='' || txtEmail=='' || txtTel=='' || txtEmail.indexOf('.')==-1 || txtEmail.indexOf('@')==-1 || txtEmail.indexOf(' ')!=-1 ){
				alert("'*' 필수 입력칸을 모두 채우세요.");
			}
			else{
				$.ajax({
					url: 'response.php', // sql 입력문 작업할 파일 file
					type: 'POST',
					data: {
						
						id  	 			: txtId,	
						pass	 			: txtPass,
						passCheck			: txtPassChk,
						name				: txtName,
						email				: txtEmail,		
						inNumber			: txtTel,			
						birthYear			: txtBirthYear,	
						birthMonth			: txtBirthMonth,	
						birthDate			: txtBirthDate,	
						gender				: txtGender,	
						addInput			: txtAddInput,		
						
						agrmt_chk			: txtAgrmt_chk,		 
						private_chk			: txtPrivate_chk,		 
						consentCheckValue	: txtConsentCheckValue, 
						smsCheck			: txtSmsCheck,			 	
						emailCheck			: txtEmailCheck,
						fourteen_chk		: txtFourteen_chk		 
						
					},
					success: function(data){
						alert( '회원가입에 성공하셨습니다.');
						gaib.submit();
						
						txtId 				 = '';
						txtPass 			 = '';
						txtPassChk 			 = '';
						txtName 			 = '';
						txtEmail			 = '';
						txtTel				 = '';
						txtBirthYear		 = '';
						txtBirthMonth		 = '';
						txtBirthDate		 = '';
						txtGender			 = '';
						txtAddInput			 = '';
											
						txtAgrmt_chk		 = '';
						txtPrivate_chk		 = '';
						txtConsentCheckValue = '';
						txtSmsCheck			 = '';
						txtEmailCheck		 = '';
						txtFourteen_chk		 = '';
					},
					error: function(){
						alert( 'error!!!!' );
					}
				});
			}
		}
	});
	
}); //ajaxPHPSQL.js



































