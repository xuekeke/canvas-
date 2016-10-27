jQuery(document).ready(function($) {

	/*手动*/
	$('#rollpic').hover(function() {
		if(setTime){
		clearInterval(setTime);			
		}
		$('#rollpic .quot').show();
		$('#rollpic .point ul').show();		
	}, function() {
		setTime=setInterval(fn,1500);
		$('#rollpic .quot').hide();
		$('#rollpic .point ul').hide();	

	}).trigger('mouseleave()');
	$('#rollpic .point li').mouseover(function() {
		var i=$(this).index();
		var url='url(img/pic'+i+'.jpg) no-repeat';
		$('#rollpic').css('background',url).css('opacity','0.5');
		$('#rollpic').css('background',url).animate({
			opacity:1,
		},'slow');
		$(this).css('color','#fff');
	});
	$('#rollpic .point li').mouseout(function() {
			$(this).css('color','');
	});
		/*自动轮播*/
	var a=0;
	function fn(){
		if(a==3){
			a=0
		}else{
			++a;
		}
		var url='url(img/pic'+a+'.jpg) no-repeat';
		$('#rollpic').css('background',url).css('opacity','0.5');
		$('#rollpic').css('background',url).animate({
			opacity:1,
		},'slow');		
	}
	setTime=setInterval(fn,1500);

});