// 页面跳转返回浏览记录

function GetPageScroll()
{
    var x, y; if(window.pageYOffset)
    {    // all except IE
    y = window.pageYOffset;
    x = window.pageXOffset;
    } else if(document.documentElement && document.documentElement.scrollTop)
    {    // IE 6 Strict
    y = document.documentElement.scrollTop;
    x = document.documentElement.scrollLeft;
    } else if(document.body) {    // all other IE
    y = document.body.scrollTop;
    x = document.body.scrollLeft;
    }
    var storage = window.localStorage;
    storage.pageScrollY=y
}
function getStorageY(){
    var y=localStorage.getItem("pageScrollY");
    document.body.scrollTop=y
}
