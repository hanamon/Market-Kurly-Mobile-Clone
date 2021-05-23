$(function(){ //section2-slide.js
	
	// 창 너비를 슬라이드 2칸 1/3 정도의 너비로 계산
	var winW   = 0;
	var slideW = 0;
	var n = $('.section2-slide-wrap>li').length;
	var nView = 2.3;  // 보여질 슬라이드 개수
	var cnt = 0;
	
	windowResizeFn();
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();		
		slideW = winW/nView; // 슬라이드 1개당 너비(한 화면에 보여질 이미지)
		// 슬라이드 전체 너비
		$('.section2-slide-wrap'   ).css({ width:(slideW*n) });
		// 슬라이드 1칸 너비
		$('.section2-slide-wrap>li').css({ width:slideW });
	}
	
	// 터치 이벤트 다음 슬라이드
	$('.section2-slide-wrap').on({
		swipeleft: function(){
			cnt++;
			if(cnt>5){
			   cnt=5.7;
			}
			$('.section2-slide-wrap').stop().animate({left: -((cnt*slideW)+20) },500);
		},
		swiperight: function(){
			cnt--;
			if(cnt<0){
			   cnt=0;
			}
			$('.section2-slide-wrap').stop().animate({left: -(cnt*slideW) },500);
		}
	});
	
}); //section2-slide.js

































