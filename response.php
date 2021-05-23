<!DOCTYPE HTML> <!-- response.php -->
<html lang='ko'>
<head>
	<title>닷홈 서버에 데이터 올리기</title>
	<meta charset='utf-8'>
</head>
<body>
<?php 
/*-------------------------------------------------------------------------------------------------------------------------------------*/
		
		// 닷홈 서버에 데이터 테이블 만들어서(sql) 올리기
		$servername ='localhost';
		$username	='jimoroot';
		$password	='parkhana0706!';
		$dbname		='jimoroot';
		
		$connect = new mysqli( $servername, $username, $password, $dbname );
		
		if( !$connect ){
			die( 'Error!!!' ) . mysqli_connect_error( $connect );
		}
		else{
			echo 'Success!!!' . '<br>' . '닷홈 호스팅 서버의 데이터베이스 서버 [localhost] 접속 성공' . '<br><br>';
		}
		
/*-------------------------------------------------------------------------------------------------------------------------------------*/		
		
		// 데이터 입력(저장)
		// 회원 가입창 정보를 [AJAX]를 구현하여
		// (id, pass, name)정보를 가져와서
		// [sql]로 구현하여 데이터베이스 정보를 저장한다.
		
		//id, pass, passCheck, name, email, tel, birthYear, birthMonth, birthDate, gender, addInput, agrmt_chk,	private_chk, consentCheckValue,	smsCheck, emailCheck, fourteen_chk
		
		if( $_POST[email].strpos('@', '.')==false || $_POST[id]=='' || $_POST[name]=='' || $_POST[email]=='' || $_POST[inNumber]=='' || $_POST[pass]=='' || $_POST[passCheck]=='' ){
			echo '공백 그리고 "@", "." 없음' . '<br><br>';
		}
		else{
			$sql = "insert into member(id, pass, passCheck, name, email, tel) values								
				(
					
					'$_POST[id]', 
					'$_POST[pass]', 
					'$_POST[passCheck]', 
					'$_POST[name]',
					'$_POST[email]',
					'$_POST[inNumber]'
					
				)";
		}
		
/*-------------------------------------------------------------------------------------------------------------------------------------*/		
		
		if( mysqli_multi_query( $connect, $sql ) ){
			echo "<script>alert(\"success\");</script>";
			echo '데이터 입력 성공!!!' . '<br><br>';
		}
		else{
			echo "<script>alert(\"error\");</script>";
			die( '어쩨서... 데이터 입력 실패!!!0000000000000' ) . '<br><br>';
		}
		
/*-------------------------------------------------------------------------------------------------------------------------------------*/
		
		// 데이터베이스 종료(닫기)
		mysqli_close( $connect );
		
/*-------------------------------------------------------------------------------------------------------------------------------------*/		
?>
</body>
</html>

<!--

	'$_POST[id]', 
	'$_POST[pass]', 
	'$_POST[passCheck]', 
	'$_POST[name]', 
	'$_POST[email]', 
	'$_POST[tel]', 
	'$_POST[birthYear]',
	'$_POST[birthMonth]',			
	'$_POST[birthDate]',			
	'$_POST[gender]',				
	'$_POST[addInput]',			

	'$_POST[agrmt_chk]',			
	'$_POST[private_chk]',		
	'$_POST[consentCheckValue]',	
	'$_POST[smsCheck]',			
	'$_POST[emailCheck]',			
	'$_POST[fourteen_chk]'		

-->






























