window.onload = function(){
	//PHP jQuery Mobile 링크는 AJAX 방식
	//이 폴리필을 사용하여 해결 하세요 _ MOONJONG
	$(document).bind("mobileinit", function(){
		$.mobile.ajaxLinksEnabled = false;
		$.mobile.ajaxFormsEnabled = false;
		$.mobile.ajaxEnabled = false;
	});
	
} //PHP_jQuery_Mobile_link.js
