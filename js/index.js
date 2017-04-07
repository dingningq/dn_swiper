
//->REM
~function () {
    var desW = 750,
        winW = document.documentElement.clientWidth || document.body.clientWidth;
    if (winW > desW) {
        document.getElementById('main').style.width = desW + 'px';
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}();
/*var winH=$(window).height();
$(".shut").css("height",winH);*/
$(function(){
	//些处为展开收缩
	var ele=$(".info_list>ul>li");
ele.delegate('a','click',function(e){
	$(this).next().slideToggle();
	$(this).parent("li").siblings().find("a").next().slideUp();
	
	//遮罩层
	$("#tan").click(function(){
		$(".layer").removeClass("none");
		$("html").addClass("hiddenY");
	})
	$("#know").click(function(){
		$(".layer").addClass("none");
		$("html").removeClass("hiddenY");
	})
})
})

