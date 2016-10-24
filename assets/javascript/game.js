var wins = 0;
var losses = 0;
var goal = "";
var score = 0;
var crystals = [];

$(document).ready(function() {

//This code was copied from the internet however I will comment my understanding of the function
$('<div id="overlay">').css({//creating overlay div
      "width" : "100%"
    , "height" : "100%" //both lines are to cover entire window
    , "background" : "#000" //set black background
    , "position" : "fixed" //static imposition
    , "top" : "0"
    , "left" : "0" //rest any inherent margins from the browser
    , "zIndex" : "50" //bring div to forefront of page
    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
    , "filter" : "alpha(opacity=60)"
    , "MozOpacity" : 0.6
    , "KhtmlOpacity" : 0.6
    , "opacity" : 0.6 //all the above are cross-browser compatability commands that will all do the same thing (create transparency) but will be picked up or ignored based on the browser

}).appendTo(document.body); //add this created overlay to the body of the webpage
$("#instructPopup").show();
$('#close').click(function(){
	$("#instructPopup").remove();
	$("#overlay").remove();
});

	function game (){
	
		goal = 
			Math.floor(Math.random() * (120 - 19 + 1)) + 19;
			$("#crysGoal").html(goal);
		for (var i = 0; i < 4; i++) {
			do	{var value = Math.floor(Math.random() * (12)) + 1;}
		 	while(crystals.indexOf(value) !== -1 ) 
			crystals.push(value);
		}
	} game(goal, crystals); 

	function reset (){
		 goal = "";
		 score = 0;
		 crystals = [];
		$(".scoreCntr").html(0);
	}

	//This function compounds on top of itself after each game. I have no idea how to stop it. I've tried using return in various places. I've tried giving it its own function. I've tried including it in my reset (using return). I don't even know what to search to get help. Google wasn't giving me relevant issues this time around.
	function check (){
		if (score === goal) {
			var audio = new Audio("../week-4-game/assets/images/oh-yeah.mp3");
					audio.play();
			alert("Yay!");
			wins++;
			$("#wins").empty().html(wins);
			reset ();
			game ();
		}
		if (score > goal) {
			losses++;
			$("#losses").empty().html(losses);
			alert("YOU'VE LOST THE GAME!!! <O>____<O>");
			reset();
			game();
		}
	}
		if (score < goal) {
			$(".crystals").click(function userClick (){
					if ($(this).is("#crys1")){
						console.log(crystals[0]);
						score += crystals[0];
						$(".scoreCntr").html(score);
						check();
					}; 
					if ($(this).is("#crys2")){
						console.log(crystals[1]);
						score += crystals[1];
						$(".scoreCntr").html(score);
						check();
					}; 
					if ($(this).is("#crys3")){
						console.log(crystals[2]);
						score += crystals[2];
						$(".scoreCntr").html(score);
						check();
					}; 
					if ($(this).is("#crys4")){
						console.log(crystals[3]);
						score += crystals[3];
						$(".scoreCntr").html(score);
						check();
					}; 

			}); 
		}
});