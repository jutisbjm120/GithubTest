$("input.tableBtn").click(function(e){
	e.preventDefault();
	var uval=$("input[type=userName]").val();
	if(uval===""){
		alert("用户名不能为空");
	}else if(!/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$/ig.test(uval)){
		alert("用户名格式不正确");
	}else{
		var pval=$("input[type=password]").val();
		if(pval===""){
			alert("密码不能为空");
		}else{
			$("form").submit();
		}
	}
});
