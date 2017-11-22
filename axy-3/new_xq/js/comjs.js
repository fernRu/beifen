var CM=CM||{};
CM.Index=(function($){
	var Comm=function(){
		Zan2();
		Xpl();
	};
	var Zan2=function(){
		//点赞+1-1效果点赞
		$(".sm_dz").click(function () {
			//$(".zan").removeClass("zan1");
			$(this).toggleClass("sm_dz1");
			var classname=$(this).attr("class");
			//alert(classname);
			var zan_num=parseInt($('>span',this).text());
			//alert(zan_num);
			if(classname == "sm_dz sm_dz1"){
				zan_num +=1;
				//alert(zan_num);
				$('>span',this).text(zan_num);
				
			}else if(classname== "sm_dz"){
				zan_num -=1;
				//alert(zan_num);
				$('>span',this).text(zan_num);
			}
		})
	};
	var Xpl = function (){
		// $('.xpl').mouseover(function(){
		// 	$('.fbxx').show();
		// 	// $(".fbxx").keydown(function(e){
		// 	// 	if(e.keyCode == 13){
		// 	// 		alert($(this).html());
		// 	// 	}
		// 	// });
		// });

		// $('.xpl').on("mouseover",function(){
		// 	$('.fbxx').show();
		// 	// $(".fbxx").keydown(function(e){
		// 	// 	if(e.keyCode == 13){
		// 	// 		alert($(this).html());
		// 	// 	}
		// 	// });
		// });
	};
	return{
		Comm:Comm
	};
})(jQuery);
$(document).ready(function(){
	CM.Index.Comm();
});