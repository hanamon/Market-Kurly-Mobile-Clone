$(function(){ //section5-slide.js
	
	var winW   = 0;
	var slideW = 0;
	var n = $('.section5-slide-wrap>li').length;
	var nView = 2.3; 
	var cnt = 0;

	windowResizeFn();
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();		
		slideW = winW/nView; 
		
		$('.section5-slide-wrap'   ).css({ width:(slideW*n) });
		$('.section5-slide-wrap>li').css({ width:slideW });
	}
	
	// 터치 이벤트 다음 슬라이드
	$('.section5-slide-wrap').on({
		swipeleft: function(){
			cnt++;
			if(cnt>3){
			   cnt=3.7;
			}
			$('.section5-slide-wrap').stop().animate({left: -((cnt*slideW)+20) },500);
		},
		swiperight: function(){
			cnt--;
			if(cnt<0){
			   cnt=0;
			}
			$('.section5-slide-wrap').stop().animate({left: -(cnt*slideW) },500);
		}
	});
	
}); //section5-slide.js

































