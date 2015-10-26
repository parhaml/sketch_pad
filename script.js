var size = 16;
var dimension = (600-size)/size;
var draw = function(size){
	for (i = 1; i <= size; i++) {	
 		$('#wrapper').append("<div class='outer' id=outer"+i+"></div>");   
 		for (j=1; j<= size; j++) {
		$("#outer"+i).append("<div class='inner' id="+j+"></div>");
		}
	}
}


draw(size)
$('.inner').css({"width": dimension, "height": dimension});

$('.inner').hover(function(){
	$(this).css("background-color", "#888");
});


/*var size = prompt("How big should the grid be?");*/
