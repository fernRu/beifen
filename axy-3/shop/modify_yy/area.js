/**
 *地区联动
 * */
function getProvinceBuy(){
$("#addAddress .dqld_div").remove();
	var province=eval(proStr);
	var newStr=new Array();
	newStr.push("<div class=\"dz_bg\"></div>");
	newStr.push("<div class=\"dqld_div\" style=\"\"><ul>");
	for(var i=0,psize=province.length;i<psize;i++){
		province[i].NAME;
		newStr.push("<li onclick=\"getCityBuy("+i+")\">"+province[i].NAME+"</li>");
	}
	// newStr.push("</div>");
	newStr.push("</ul></div>");
	$("#addAddress").append(newStr.join(""));
}

function getCityBuy(val){
	var province=eval(proStr);
	var city=eval(province[val].ITEMS);
	var newStr=new Array();
	newStr.push("<div class=\"dqld_div\"><ul>");
	newStr.push("<li onclick=\"getProvinceBuy()\" style=\"display:none\">"+province[val].NAME+"</li>");
	for(var j=0,csize=city.length;j<csize;j++){
		newStr.push("<li onclick=\"getAreaBuy("+j+","+val+")\"  style=\"padding-left:0px;background: url(../images/click.png) no-repeat right;background-size: 10px;\">"+city[j].NAME+"</li>");
	}
	newStr.push("</ul></div>");
	$("#addAddress .dqld_div").remove();
	$("#addAddress").append(newStr.join(""));
}

function getAreaBuy(val,val1){
	var province=eval(proStr);
	var city=eval(province[val1].ITEMS);
	var area=eval(city[val].ITEMS);
	var newStr=new Array();
	newStr.push("<div class=\"dqld_div\"><ul>");
	newStr.push("<li onclick=\"getProvinceBuy()\" style=\"display:none;\">"+province[val1].NAME+"</li>");
	newStr.push("<li onclick=\"getCityBuy("+val1+")\" style=\"display:none;\">"+city[val].NAME+"</li>");
	for(var t=0,asize=area.length;t<asize;t++){
		area[t].NAME;
		newStr.push("<li  style=\"padding-left:0px;\" onclick=\"getallArea("+val1+","+val+","+t+")\">"+area[t].NAME+"</li>");
	}
	newStr.push("</ul></div>");
	if(asize==0){
		var allarea=province[val1].NAME+city[val].NAME;
		$("#shengshi").attr({"SS":province[val1].NAME,"SQ":city[val].NAME,"XS":""});
		$("#shengshi").val(allarea);
		$("#addAddress .dqld_div").remove();
	}
	else{
		$("#addAddress .dqld_div").remove();
		$("#addAddress").append(newStr.join(""));
	}
}

function getallArea(val,val1,val2){
	var province=eval(proStr);
	var city=eval(province[val].ITEMS);
	var area=eval(city[val1].ITEMS);
	var allarea=province[val].NAME+city[val1].NAME+area[val2].NAME;
	$("#shengshi").attr({"SS":province[val].NAME,"SQ":city[val1].NAME,"XS":area[val2].NAME});
	$("#shengshi").val(allarea);
	$("#addAddress .dqld_div").remove();
	$("#addAddress .dz_bg").remove();
}
/*地区联动¯*/