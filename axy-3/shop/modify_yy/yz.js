window.onload=function(){
	$("#username").focus()
}
/************************  失焦判断  **********************************/
$(".xm_dh input").blur(function(){
	$(".spa").css("color","#BD362F")
	if($(this).is("#username")){             //姓名判断
		var na=/^[\u4E00-\u9FA5]{2,6}$/
		if($("#username").val()!=""){
			if(!(na.test($("#username").val()))){
				$(".spa1").text("请输入2-6个汉字");
				// $(this).css("border","1px solid #BD362F")
				return false;
			}else if(na){
				$(".spa1").text("");
			return true;
			}
		}else{
			$(".spa1").text("");
		}
	}
	if($(this).is("#userphone")){//手机号判断
		var ph=/^1[3|5|7|8|][0-9]{9}$/
		if($("#userphone").val()!=""){
			if(!(ph.test($("#userphone").val()))){
				$(".spa2").text("请输入正确手机号");
				// $(this).css("border","1px solid #BD362F")
				return false;
			}else if(ph){
			$(".spa2").text("");
				return true;
			}
		}else{
			$(".spa2").text("");
		}
	}

})
/********************** 聚焦提示 ************************/	
$(".xm_dh input").focus(function(){
	if($(this).is("#username")){
		$(".spa1").text("请输入2-6个汉字").css("color","#aaa")
	// $(this).css("border","1px solid #aaa")
	}
	if($(this).is("#userphone")){
		$(".spa2").text("11位手机号码").css("color","#aaa")
		// $(this).css("border","1px solid #aaa")
	}
})
/*********************** 提交验证 ***************************/
$("#sub").click(function(){
	var na=/^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
	var ph=/^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
	if(na.test($("#username").val())&&ph.test($("#userphone").val())){
		return true;
	}else{
		if($("#username").val()==""){
			$(".spa1").text('请你填写用户名')
		} 
		if($("#userphone").val()==""){
			$(".spa2").text('请你填写手机号')
		}
		return false;
	}
})