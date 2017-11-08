$(function (){
    var myscroll = new iScroll("wrapper",{
        momentum: true,
        mouseWheel: true,
        onScrollMove: function(){
            if (this.y<(this.maxScrollY)) {
                $('.pull_icon').addClass('flip');
                $('.pull_icon').removeClass('loading');
                $('.more span').text('释放加载...');
            }else{
                $('.pull_icon').removeClass('flip loading');
                $('.more span').text('上拉加载...')
            }
            //上哪
            if (this.y>(this.minScrollY)) {
                //alert('dddd');
            }
        },
        onScrollEnd: function (){
            if ($('.pull_icon').hasClass('flip')) {
                $('.pull_icon').addClass('loading');
                $('.more span').text('加载中...');
                pullUpAction();
            }
        },
        onRefresh: function(){
            $('.more').removeClass('flip');
            $('.more span').text('上拉加载...');
        }
    });
    function pullUpAction(){
        setTimeout(function(){
            /*$.ajax({
                url:'/json/ay.json',
                type:'get',
                dataType:'json',
                success:function(data){
                    for (var i = 0; i < 5; i++) {
                        $('.scroller ul').append(data);
                    }
                    myscroll.refresh();
                },
                error:function(){
                    console.log('error');
                },
            })*/
            var html = '<li><a href="#"><img class="img" src="./images/img10.jpg" />';
            html += '<p class="store">上海市黄浦区上海市黄浦区xxxxxxx</p>';
            html += '<p class="Location">地址:<span>上海市黄浦区xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx店</span></p>';
            html += '<p class="km"><50.0km</p></a>';
            html += '<div class="Telephone"><span class="yysj">营业时间</span><span class="time">9:00~21:00</span><b>|</b>';
            html += ' <a class="lxwm" href="#" data-name="11111111111">联系我们</a></div></li>';
            for (var i = 0; i < 5; i++) {
                $('.CLlink ul').append(html);
            }
            myscroll.refresh();
        }, 1000)
    }
    if ($('.CLlink').height()<$('#wrapper').height()) {
        $('.more').hide();
        myscroll.destroy();
    }
});