var size = 16;
var draw = function(size){
	var dimension = (600-size)/size;
	for (i = 1; i <= size; i++) {	
 		$('#wrapper').append("<div class='outer' id=outer"+i+"></div>");   
 		for (j=1; j<= size; j++) {
		$("#outer"+i).append("<div class='inner' id="+j+"></div>");
		}
	}
	$('.inner').css({"width": dimension, "height": dimension});
	$('.inner').hover(function(){
		$(this).css("background-color", "#888");
	});
}


draw(size)




$('#button').click(function(){
	var size = prompt("How big should the grid be?");
	$('.inner').remove();
	$('.outer').remove();
	draw(size);
});

/*var size = prompt("How big should the grid be?");*/
