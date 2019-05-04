//验证表单
timer=null;
$(".tableBtn").click(function(e){
	e.preventDefault();
	var phone=$(".tableItem input[type=text]").val();
	var pwd=$(".tableItem input[type=password]").val();
	var apwd=$("input[name=rePassword]").val();
	if(phone===""){
		alert("手机号码不能为空！");
		$(".tableItem input[type=text]").focus();
	}else if(!/^1[3578]\d{9}$/ig.test(phone)){
		alert("请输入正确的手机号码");
		$(".tableItem input[type=text]").focus();
	}else if(pwd===""){
		alert("密码不能为空！");
		$(".tableItem input[type=password]")
	}else if(!/^\w{6,10}$/ig.test(pwd)){
		alert("密码格式不正确！");
		$(".tableItem input[type=password]")
	}else if(pwd!=apwd){
		alert("两次密码不一致请输入正确的密码！");
		$("input[name=rePassword]").focus();
	}else if($(".yanzheng").val()==""){
		alert("请输入验证码");
		$("input[name=yanzheng]").focus();
	}else{
		alert("注册成功");
		$(" input:not(input[type=button])").val("");
		$(".tableBtn").val("同意协议并注册");
		$(".tableText").html("获取验证码");
		clearInterval(timer);
	}
});
//验证码设置
$(".tableText").click(function(e){
			e.preventDefault();
	(timer===null)&&($(this).html("验证码已发送"));
			$(this).prop("disabled",true);
			var time=60;
			if(timer===null){
				 timer=setInterval(function(){
					$(this).html("("+time+"s)后获取验证码");
					if(time<=1){
						clearInterval(timer);
						timer=null;
						$(this).html("获取验证码");
					}
					time--;
				}.bind(this),1000);
			}
		});