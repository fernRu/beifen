var Zhsf=Zhsf||{};
Zhsf.Index=(function ($) {
	var Effect=function(){
		Tck();
		BookSel();
	};
	var Tck=function(){
		//弹出框
		$('.CLlink .Telephone a').click(function(){
			var call=document.getElementById("call");
			var $dh=$("#dh");
			var tt=$(this);
			$('.popupT').show(0,function(){
				var tel=tt.attr("data-name");
				$dh.text(tel);
				call.setAttribute("href","tel:"+tel);
			});			
		});
		$('.popupT .cancel').click(function(){
			$('.popupT').hide();
		});
		$('.popupT').click(function(){
			$('.popupT').hide();
		});
	};
	var BookSel=function(){
		//切换
		var $Rdzx =$(".zh_zn .bookSel li");
	    $Rdzx.hover(function(){
			$(this).addClass("selTab")         
				   .siblings().removeClass("selTab"); 
            var index =  $Rdzx.index(this);  
			$(".zh_zn .changeCont > div")   	
					.eq(index).show()  
					.siblings().hide(); 
		})
	};
	return{
		Effect:Effect
	};
})(jQuery);
$(document).ready(function(){
	Zhsf.Index.Effect();
});