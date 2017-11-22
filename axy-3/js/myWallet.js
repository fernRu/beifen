	$("input [type=radio]").each(function(){
		if($(this).attr("checked")=="true"){
			$(this).parent().find("input").val();
		}
	})