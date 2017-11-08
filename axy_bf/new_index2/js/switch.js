//城市筛选
//只需保持 a 的 class 标志 和data-belong  一致即可。
// $('.switch').click(function(){
// 	$('.xzcs .xz').show();
// });
// $(".xzcs .xz:lt(2) a").click(function(){
// 	$("div.switch ."+$(this).attr('data-belong')).remove();
// 	$(this).clone().appendTo("div.switch");
// 	$('.xzcs .xz').hide();
// });
$('.switch').on('click',function (event) {
    event.stopPropagation();//阻止事件冒泡
    $(this).siblings('.xzcs .xz').toggle();
    $(".xzcs .xz:lt(2) a").click(function(){
		$("div.switch ."+$(this).attr('data-belong')).remove();
		$(this).clone().appendTo("div.switch");
		$('.xzcs .xz').hide();
	});
    //点击空白处，下拉框隐藏-------开始
    var tag = $(this).siblings('.xzcs .xz');
    var flag = true;
    $(document).bind("click",function(e){//点击空白处，设置的弹框消失
        var target = $(e.target);
        if(target.closest(tag).length == 0 && flag == true){
            $(tag).hide();
            flag = false;
        }
    });
    //点击空白处，下拉框隐藏-------结束
});