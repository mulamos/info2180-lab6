$(document).ready(function(){
	$("#search").click(function(){
		var query = $(#query).val();
		var url = "https://info2180-lab6-mulamos.c9users.io/request.php?q="+query;
		$.ajax(url, {
			method: 'GET',
		}).done(function(result){
			$("#result").html(result);
		}).fail(function(error){
			$("#result").html(error);
		});
	});	
});