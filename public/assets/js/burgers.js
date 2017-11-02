// On click to eat burger
$(function(){
	$(".eatBurger").on("click", function(event){
		var id = $(this).data("id");
		$.ajax("/api/burgers/"+id, {
			type: "PUT",
			data: id
		}).then(function(){
			// reload after ajax
			location.reload();
		})
	});
});