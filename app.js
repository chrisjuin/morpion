var image; 
image= 0;

var player1; 
var player2;

$("#newGame").modal("toggle");
$("#launch").click(function(){
$("#newGame").modal("toggle");
});

$("#parametre").click(function(){

	player1 = $(".player1").val(); 

	console.log(player1);

	player2 = $(".player2").val(); 

	console.log(player2);

	$(".joueur").html(player1 +" vs "+ player2);

}); 

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
