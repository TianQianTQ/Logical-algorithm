function agree(){
	var agreement=$(".agreement");                //��ʾ
	agreement.css('display','block');
	console.log(1);
	center(agreement);
	// ���� 
	function center(obj) { 
	var screenWidth = $(window).width(), screenHeight = $(window).height(); //��ǰ��������ڵ� ��� 
	var scrolltop = $(document).scrollTop();//��ȡ��ǰ���ھ���ҳ�涥���߶� 
	var objLeft = (screenWidth - obj.width())/2 ; 
	var objTop = (screenHeight - obj.height())/2 + scrolltop; 
	obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'}); 
	//��������ڴ�С�ı�ʱ 
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
	//������й�����ʱ�Ĳ����� 
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
