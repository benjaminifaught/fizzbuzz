$(document).ready(function() {
var max = parseInt(prompt("What number would you like to fizzbuzz to?"), 0);
var s = "";
for (var i = 0; i <=max; i++) {
	if (i % 15 == 0) {
		console.log("FizzBuzz");
		s = "FizzBuzz"; 
		$(".list").append(s+ "<br>"); 
	}
	else if (i % 5 == 0)  {
		console.log("Fizz");
		s = "Fizz";
		$(".list").append(s+ "<br>"); 
	}
	else if (i % 3 == 0) {
		console.log("Buzz");
		s = "Buzz";
		$(".list").append(s+ "<br>"); 
	}
   	else {
   		console.log(i);
   		s = i;
   		$(".list").append(s+ "<br>"); 
   	}
} 
});
