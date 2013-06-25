$(function(){

	prettyPrint();

	$("#padcal-sample1, #padcal-sample2").padcal();
	$("input[type='date']").val("2013-06-01");

	$("#get").click(function(){
		alert($("#padcal-sample2").val());
	});

	$("#set").click(function(){
		// val()のsetだけではなく、change()も発行してください。
		$("#padcal-sample2").val($("input[type='date']").val()).change();
	});

});