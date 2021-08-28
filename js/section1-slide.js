$(function(){ //section1-slide.js
	
	var s = [];
	var a = [];
	var b = [];
	var n = $('.section1-slide').length-1;
	var j = k = 0;
	
	function sFn(){
		for(i=0;i<=n;i++){ s[i]=0; }
	}
	sFn();
	s[0]=1;
	
	$('.section1-slide-wrap').on({
		swipeleft: function(){
			nextSlideFn();
		},
		swiperight: function(){
			prevSlideFn();
		}
	});
	
	function nextSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i==n ){
					nextSlide(0);
					break;
				}
				else{
					nextSlide(i+1);
					break;
				}
			}
		}
	}
	
	function prevSlideFn(){
		for(i=0;i<=n;i++){
			if( s[i]==1 ){
				if( i==0 ){
					prevSlide(n);
					break;
				}
				else{
					prevSlide(i-1);
					break;
				}
			}
		}
	}
	
	function nextSlide(z){
		sFn();
		s[z]=1;
		
		if( z==0 ){
			a = [7,0,1,2,3,4,5,6];
		}
		else if( z==1 ){
			a = [0,1,2,3,4,5,6,7];
		}
		else if( z==2 ){
			a = [1,2,3,4,5,6,7,0];
		}
		else if( z==3 ){
			a = [2,3,4,5,6,7,0,1];
		}
		else if( z==4 ){
			a = [3,4,5,6,7,0,1,2];
		}
		else if( z==5 ){
			a = [4,5,6,7,0,1,2,3];
		}
		else if( z==6 ){
			a = [5,6,7,0,1,2,3,4];
		}
		else if( z==7 ){
			a = [6,7,0,1,2,3,4,5];
		}
		for(i=0;i<=n;i++){
			$('.section1-slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},1000);
		}
		$('.section1-pageNum').text((z+1));
	}
	
	function prevSlide(z){
		sFn();
		s[z]=1;
		
		if( z==7 ){
			b = [0,7,6,5,4,3,2,1];
		}
		else if( z==6 ){
			b = [7,6,5,4,3,2,1,0];
		}
		else if( z==5 ){
			b = [6,5,4,3,2,1,0,7];
		}
		else if( z==4 ){
			b = [5,4,3,2,1,0,7,6];
		}
		else if( z==3 ){
			b = [4,3,2,1,0,7,6,5];
		}
		else if( z==2 ){
			b = [3,2,1,0,7,6,5,4];
		}
		else if( z==1 ){
			b = [2,1,0,7,6,5,4,3];
		}
		else if( z==0 ){
			b = [1,0,7,6,5,4,3,2];
		}
		j = 1;
		k = 2;
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.section1-slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},1000);
		}
		$('.section1-pageNum').text((z+1));
	}
	
}); //section1-slide.js