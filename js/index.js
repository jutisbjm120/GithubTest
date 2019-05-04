var preascar={
	sumcount:0,
	sumprices:0,
	carlist:[]
}
$(".shop li").each(function(dex,ietm){  //初始化页面
	preascar.carlist.push({
		price:$(ietm).find("strong").html().slice(1)-0,
		count:$(ietm).find(".J_inputCount").val()-0,
		sumprice:$(ietm).find("strong").html().slice(1)*$(ietm).find(".J_inputCount").val()
	});
});
$(".shop").on("click","span",function(){ //为页面绑定增加和减少事件
	var inde=$(this).parents("li").index();
	if($(this).html()==="+"){//判断条件
		preascar.carlist[inde].count++;
	}else{
		if(preascar.carlist[inde].count<=1){
			alert("不能再减了");
			return false;
		}
		preascar.carlist[inde].count--;
	}
	preascar.carlist[inde].sumprice=preascar.carlist[inde].count*preascar.carlist[inde].price;
		$(this).siblings("input").val(preascar.carlist[inde].count);
		$(this).parent(".plush").next("strong").html("&yen;"+preascar.carlist[inde].sumprice.toFixed(1));
		chagen();
});
$(".last").on("click",".close",function(e){//为关闭按钮绑定事件
	e.preventDefault();
	var inde=$(this).parents("li").index();
	$(this).parents("li").remove();
	preascar.carlist.splice(inde,1);
	chagen();
	if(preascar.carlist.length===0){
		$(".shop").hide();
		$(".noshop").show();
	}
});
function chagen(){//当数据发生改变时
	preascar.sumcount=0;
		preascar.sumprices=0;
		$.each(preascar.carlist, function(ine,etm) {
			preascar.sumcount+=etm.count;
			preascar.sumprices+=etm.sumprice;
		});
		$(".J_totalPrice").html("&yen;"+preascar.sumprices);
		$(".J_totalCount").html("("+preascar.sumcount+")");
}
$(".car_t").hover(function(){//控制购物车的隐藏与否
	$(".last").show().hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	
},function(){
	$(".last").hide();
});
$(".leftNav").on("mouseover","li",function(){//控制左边弹出详细列表
	$(this).find(".zj").show().parents("li").siblings("li").find(".zj").hide();
});
$(".leftNav").on("mouseleave","li",function(){
	$(this).find(".zj").hide();
});
var scroll=0,timer=null;
	function auto(){//侧边动画效果
		timer=setInterval(function(){
		scroll+=3;
		$("#express li").css("transform","translateY("+-scroll+"px)");
	if(scroll>=97){
			$("#express li").slice(0,4).appendTo("#express");
			$("#express li").css("transform","translateY(0px)");
			scroll=0;
		}
	},300);
}
	auto();
$("#express li").hover(function(){//当鼠标在li上时停止动画，移出时开始动画
	clearInterval(timer);
},function(){
	auto();
});
var peet={
	IMG:null,//保存显示的图片
	LI:null,//保存小列表
	time:1000,//保存时间间隔
	timer:null,//保存计时器序号
	data:0,//保存一开始高亮和显示的下标
	init:function(){//初始化页面
		this.IMG=$(".slide_box ").children("li");
		this.LI=$(".num").children("li");
		this.autoplay();
		this.shoudong();
	},
	autoplay:function(){//自动轮播
		this.timer=setInterval(function(){
			this.data++;
			$(this.IMG[this.data%3]).fadeIn().siblings("li").fadeOut();
			$(this.LI[this.data%3]).addClass("active").siblings("li").removeClass("active");
		}.bind(this),this.time);
	},
	shoudong:function(){//手动轮播
		this.LI.hover(function(e){
			clearInterval(this.timer);
			this.timer=null;
			var inn=$(e.target).find("a").html()-1;
			$(this.IMG[inn]).fadeIn().siblings("li").fadeOut();
			$(this.LI[inn]).addClass("active").siblings("li").removeClass("active");
		}.bind(this),function(e){
			this.data=$(e.target).find("a").html()-1;
			this.autoplay();
		}.bind(this));
	}
}
peet.init();
