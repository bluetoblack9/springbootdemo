$(document).ready(function() {
	$("#hello").click(function() {
		hello();
	})

})

function hello() {
	var request = {};
	request.name = $("#name").val();
	Smart.post("/web/rest/user/hello", request, function(response) {
		$("#console").html(response.data);
	});

}

