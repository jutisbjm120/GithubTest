	var issort=-1;
$("#sortPrice").click(function(e){
	var frage=document.createDocumentFragment();
	e.preventDefault();
	var liatarr=$(".cate_list li");
	liatarr.sort(function(list1,list2){
		return ($(list1).find("span").html().slice(1)-$(list2).find("span").html().slice(1))*issort;
	});
	$(".cate_list").empty();
	liatarr.each(function(ine,itm){
		$(itm).appendTo(frage);
	});
	$(".cate_list").append(frage);
	issort*=-1;
});


