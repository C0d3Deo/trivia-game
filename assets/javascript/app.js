var counter = 30.00;
var interval;
var score = 0;
var right = 0;
var wrong = 0;

function count (){
	counter -= 0.01;
}

var countDwn = setInterval(count, 10);
	
function start(){
    // I've realized that my timer doesn't count in actual tenths of seconds due to an inherent problem of the javascript language. The solutions to fix it seemed like more trouble than it was worth. Users have "about" 16 seconds which is fine to me.
    countDwn;
    $("#counterBox").html(counter.toFixed(2));
} 

$(document).ready(function() {
	// $("input[type=radio]").prop("checked", false);
	interval = setInterval(start,10)

    $("#submit").on("click", function (){
    	clearInterval(interval);
    	score = Math.round(counter);
    	var numQuestions = $(".question").length;
    	for (var i = 0; i < numQuestions; i++) {
    		var questions = document.getElementsByClassName("question");
    		var selectValue =  questions[i].input[questions[i].checkedIndex].val();
    		if (selectedValue == "wrong"){
    			score += -2;
    			++wrong;
    			console.log(score);
    			console.log(wrong);
    		}else if (selectedValue == "right"){
    			score += 4;
    			++right;
    			console.log(score);
    			console.log(right);
    		}
    	}
    	// setTimeout( alert("Time Left: " + counter +"\n" +
    	// 		"Not Wrong: " + right + "\n" +
    	// 		"Not Not Anti-Right: " + wrong), 5000);
    	// $("#timeScore", "#rightScore", "wrongScore").html(counter, right, wrong);

  //   	$('<div id="overlay">').css({//creating overlay div
		//       "width" : "100%"
		//     , "height" : "100%" //both lines are to cover entire window
		//     , "background" : "#000" //set black background
		//     , "position" : "fixed" //static imposition
		//     , "top" : "0"
		//     , "left" : "0" //rest any inherent margins from the browser
		//     , "zIndex" : "50" //bring div to forefront of page
		//     , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
		//     , "filter" : "alpha(opacity=60)"
		//     , "MozOpacity" : 0.6
		//     , "KhtmlOpacity" : 0.6
		//     , "opacity" : 0.6 //all the above a
		//     }).appendTo(document.body);
	 //   $("#dialog-1").css({
	 //   		"width" : "col-md-4",
	 //   		"background" : "white",
	 //   		"position" : "fixed",
	 //   		"zIndex" : "50"
	 //   })
		// .show(); 
    });

});