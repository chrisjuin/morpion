var image; 
image= 0;

$(".game").click(function(){

	if (image%2 === 0) {
		$(this).html("<img src='image1.png'>");
	}else {

		$(this).html("<img src='image2.png'>");
	}

	image++;

});

$(".reset").click(function(){
	alert("clear the game ?"); 	
	$(".game").html("");	
}); 

// $(".case").html("");


