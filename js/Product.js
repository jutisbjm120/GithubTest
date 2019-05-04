$("#choice1,#choice2").on("click","li",function(){//尺码和颜色选择的选中状态改变
	$(this).addClass("checked").siblings("li").removeClass("checked");
});
$(".des_join").on("click","input[type=button]",function(){
	var count=$(".n_ipt").val();
	if($(this).index()===1){
		count++;
		$(".n_ipt").val(count);
	}else{
		count<=1?alert("不能再减了"):count--;
		$(".n_ipt").val(count);
	}
});
$(".checkbox input").click(function(){//为推荐搭配绑定事件
	var ss=$(this).parent(".checkbox").next("span").html().slice(1)*$(".sum_ipt").val();
	var ll=$(".team_sum").children("span").html()-0;
	if($(this).prop("checked")===true){
		$(".team_sum").children("span").html(ss+ll);
	}else{
		$(".team_sum").children("span").html(ll-ss);	
	}
});
$(".sum_ipt").blur(function(){//修改套餐数量时改变
	var salary=$(".team_sum").children("span").html();
	$(".team_sum").children("span").html(salary*$(this).val());
});
$(".des_tit ul").on("click","li",function(e){
	$(this).addClass("current").siblings("li").removeClass("current");
	e.preventDefault();
});
