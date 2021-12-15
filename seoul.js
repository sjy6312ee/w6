



		//오브젝트 소리
		//SEOUL 커피잔
		//seoulSnd.volume = 0.05;
		//seoulSnd.currentTime = 0;

       //function sound(){document.getElementById("seoulSnd").play();}
       //function mute(){document.getElementById("seoulSnd").pause();}

       //TOKYO 도시락 뚜겅
		//tokyoSnd.volume = 0.05;
		//tokyoSnd.currentTime = 0;

       //function sound(){document.getElementById("tokyoSnd").play();}
       //function mute(){document.getElementById("tokyoSnd").pause();}





       //숫자 애니메이션
       //SEOUL
       $({ val : 0 }).animate({ val : 8720 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(Math.floor(this.val));
    		$(".count_num").text(num);},
  		complete: function() {
   			var num = numberWithCommas(Math.floor(this.val));
    		$(".count_num").text(num);}
		});

       	function numberWithCommas(x) {
   			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

   		//TOKYO
   		$({ val : 0 }).animate({ val : 1041 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(Math.floor(this.val));
    		$(".count_num2").text(num);},
  		complete: function() {
   			var num = numberWithCommas(Math.floor(this.val));
    		$(".count_num2").text(num);}
		});

       	function numberWithCommas(x) {
   			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

   		//WASHINGTON
   		$({ val : 0 }).animate({ val : 15 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(Math.floor(this.val));
    		$(".count_num3").text(num);},
  		complete: function() {
   			var num = numberWithCommas(Math.floor(this.val));
    		$(".count_num3").text(num);}
		});

       	function numberWithCommas(x) {
   			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}

   		//PRETORIA
   		$({ val : 0 }).animate({ val : 21.69 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num4").text(num);},
  		complete: function() {
   			var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num4").text(num);}
		});

		//BERLIN
   		$({ val : 0 }).animate({ val : 9.6 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(this.val.toFixed(1));
    		$(".count_num5").text(num);},
  		complete: function() {
   			var num = numberWithCommas(this.val.toFixed(1));
    		$(".count_num5").text(num);}
		});

		//PARIS
   		$({ val : 0 }).animate({ val : 10.48 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num6").text(num);},
  		complete: function() {
   			var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num6").text(num);}
		});

		//LONDON
   		$({ val : 0 }).animate({ val : 8.91 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num7").text(num);},
  		complete: function() {
   			var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num7").text(num);}
		});

		//CANBERRA
   		$({ val : 0 }).animate({ val : 20.33 }, {
 		 duration: 1000,
 		step: function() {
    		var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num8").text(num);},
  		complete: function() {
   			var num = numberWithCommas(this.val.toFixed(2));
    		$(".count_num8").text(num);}
		});

		/*$({ val : 0 }).animate({ val : 1.5 }, {
 		  duration: 1000,
  		step: function() {
    		var num = numberWithCommas(this.val.toFixed(1));
    		$(".count_num2").text(num);},
  		complete: function() {
		    var num = numberWithCommas(this.val.toFixed(1));
		    $(".count_num2").text(num);}
		});

		function numberWithCommas(x) {
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}*/

       //마우스 휠-스크롤
       //1번
		/*scrollVert();
		var scrollLeft=0;

		function scrollVert() {
		  $('html, body, section, *').off('mousewheel').mousewheel(function(e, delta) {
		    this.scrollTop -= (delta * 40);
		    e.preventDefault();
		    setTimeout(function() {
		      if ($(window).scrollTop() + $(window).height() == $(document).height())
		        scrollHoriz();}, 0)});
			}

		function scrollHoriz() {
		  $('html, body, section, *').off('mousewheel').mousewheel(function(e, delta) {
		    this.scrollLeft -= (delta * 40);
		    e.preventDefault();
		    scrollLeft=this.scrollLeft
		    setTimeout(function() {
		      if (scrollLeft == 0) scrollVert();
		    }, 0)
		  });
		}*/

		//2번
		/*$("#id").on('mousewheel',function(e){
			var wheelDelta = e.originalEvent.wheelDelta;

			if(wheelDelta > 0){
				console.log("up");
				$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
			}else{
			console.log("down");
				$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());}
			});*/

		//3번
		$.fn.hasScrollBar = function() {
	    return (this.prop("scrollWidth") == 0 && this.prop("clientWidth") == 0)
	            || (this.prop("scrollWidth") > this.prop("clientWidth"));};
	            // 좌우 스크롤이 있는지 없는지 여부 검사
		function wheel(name){
			$(name).on('mousewheel',function(e){
	    	var hasScroll = $(this).hasScrollBar();
	    	if(!hasScroll){ //스크롤이 없으면 그냥 일반 스크롤
	    	}else{ //있으면 아래 스크롤 받는값을 없애고 좌우스크롤 
	        	var wheelDelta = e.originalEvent.wheelDelta;
	        	if(wheelDelta > 0){
	            	$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
	        	}else{
	            	$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());}
	    		}
			});
		}
		$(function(){
	    	wheel('html');});


		//arrow로 스크롤 위치 이동
		//to tokyo
		$(document).ready(function(){
		$('#arrowBtn1').click(function(){
			var offset = $('.tokyobox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to washington
		$(document).ready(function(){
		$('#arrowBtn2').click(function(){
			var offset = $('.washibox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to pretoria
		$(document).ready(function(){
		$('#arrowBtn3').click(function(){
			var offset = $('.pretobox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to berlin
		$(document).ready(function(){
		$('#arrowBtn4').click(function(){
			var offset = $('.berlinbox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to paris
		$(document).ready(function(){
		$('#arrowBtn5').click(function(){
			var offset = $('.parisbox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to london
		$(document).ready(function(){
		$('#arrowBtn6').click(function(){
			var offset = $('.londonbox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to canberra
		$(document).ready(function(){
		$('#arrowBtn7').click(function(){
			var offset = $('.canbebox').offset(); //선택한 태그의 위치를 반환

                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	        $('html').animate({scrollLeft : offset.left}, 300);});
		});

		//to seoul
		//$(document).ready(function(){
		//$('#arrowBtn8').click(function(){
		//	var offset = $('.seoulbox').offset(); //선택한 태그의 위치를 반환
//
                //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
	    //    $('html').animate({scrollRight : offset.right}, 300);});
		//});




		$(window).on('mousewheel', function(e){ if(e.originalEvent.wheelDelta < 0) {
			//scroll down
			$('html, body').stop().animate({ scrollLeft : '+=505vw' },20);
			}else {
			//scroll up
			$('html, body').stop().animate({ scrollLeft : '-=505vw' },20); }
			//prevent page fom scrolling
			return false; });


		//$(window).scroll(function(){	
		//if( $(window).scrollLeft()>=13000 ){
		//			$(".canbebox").css({
		//				background: "#43B9DD"
		//			});
		//		}
		//		else {
		//			$(".canbebox").css({
		//				background: "#1A1A1A"
		//			});
		//		}
		//	});