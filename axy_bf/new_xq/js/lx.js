$(function ($){
	$.fn.autoHide = function() {
		var ele = $(this);
		$(document).on("click",function(e){
			if(ele.is(":visible") && (!$(e.target)[0].isEqualNode(ele[0]) && ele.has(e.target).length === 0)){
				ele.hide();
			}
			e.stopPropagation();
			return false;
		});
		return this;
	}
})(jQuery);