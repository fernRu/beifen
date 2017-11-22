var XQ=XQ||{};
XQ.Index=(function($){
	var InitUI=function(){
		Zan();
		BColor();
		More();
	};
	var Zan=function(){
		//点赞+1-1效果
		$(".zan").click(function () {
			//$(".zan").removeClass("zan1");
			$(this).toggleClass("zan1");
			var classname=$(this).attr("class");
			//alert(classname);
			var zan_num=parseInt($('>span',this).text());
			//alert(zan_num);
			if(classname == "zan zan1"){
				zan_num +=1;
				//alert(zan_num);
				$('>span',this).text(zan_num);
				
			}else if(classname== "zan"){
				zan_num -=1;
				//alert(zan_num);
				$('>span',this).text(zan_num);
			}
		})
	};
	var BColor=function(){
		//点击变色
		//想看点击变色
		$('.score_record .score').click(function(){
			$(this).addClass('scoSel').siblings().removeClass('scoSel');
		});
	};
	var More=function(){
		// 显示隐藏(简介内容展开收起)
		$(function(){
			var text = $("#piot").text();
			var flag = text.length > 20 ? true : false;
			if(flag){
				$("#piot").html("");
				$("#piot").append("<div>" + text.substring(0, 60) 
			        + "<span id='hide' style='display:none'>" + text.substring(60) + "</span>"
			        + "...<a href='javascript:;' id='open'>展开</a></div>");
			}
			// 
			$("#open").click(function(){
				if(flag){
				  $("#open").text("收起");
				  $("#hide").show();
				  flag = false;
				} else{
				  $("#open").text("展开");
				  $("#hide").hide();
				  flag = true;
				}
			});
		});
	};
	return{
		InitUI:InitUI
	};
})(jQuery);
$(document).ready(function(){
	XQ.Index.InitUI();
});