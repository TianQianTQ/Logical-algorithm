function agree(){
	var agreement=$(".agreement");                //提示
	agreement.css('display','block');
	console.log(1);
	center(agreement);
	// 居中 
	function center(obj) { 
	var screenWidth = $(window).width(), screenHeight = $(window).height(); //当前浏览器窗口的 宽高 
	var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度 
	var objLeft = (screenWidth - obj.width())/2 ; 
	var objTop = (screenHeight - obj.height())/2 + scrolltop; 
	obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'}); 
	//浏览器窗口大小改变时 
		$(window).resize(function() { 
			if(obj.css('display')=='block'){
				screenWidth = $(window).width(); 
				screenHeight = $(window).height(); 
				scrolltop = $(document).scrollTop(); 
				objLeft = (screenWidth - obj.width())/2 ; 
				objTop = (screenHeight - obj.height())/2 + scrolltop; 
				obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'}); 
			}
		}); 
	//浏览器有滚动条时的操作、 
		$(window).scroll(function() { 
			if(obj.css('display')=='block'){
				screenWidth = $(window).width(); 
				screenHeight = $(window).height(); 
				scrolltop = $(document).scrollTop(); 
				objLeft = (screenWidth - obj.width())/2 ; 
				objTop = (screenHeight - obj.height())/2 + scrolltop; 
				obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'}); 
			}
		}); 
	} 	
}
