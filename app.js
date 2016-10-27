/*alert('Hello World');*/

//Writing a conditional to check if a variable is less than 10
/*var x = 13;
if(x<10){
	alert('This is less than 10!');
} else{

alert(x + ' is greater than 10!');
}*/

/*var x = "Ivey"
if(x=="Ivy"){
	alert("Is spelling really that essential?");
}else {
	alert("Ivey is NOT the same as Ivy. Mine is the masculine version.");
}*/

//Declaring and invoking functions
/*var usertext="This house is better than normal."
function someText(usertext){
	return usertext;
}
console.log(someText(usertext));*/

//Function with no argument

/*function someNumber(){
	return numberOne + 15 + otherNumber;
}
console.log(someNumber(numberOne, otherNumber));*/

//Functions with Door 1, 2, 3

/*function doors(doorNumber){
	if(doorNumber == 1){
		alert("You've won a goat.")
	}else if(doorNumber == 2){
		alert("You've won a recliner.")
	}
	else if(doorNumber == 3){
		alert("You've won a car!")
	}
}
doors(1);*/

//Names Loop

/*names = ["Jake", "John", "Samantha", "Billy"]
  for(var i = 0; i< names.length; i++){
  	console.log(names[i] + " " +"is my friend")

//99 Bottles of Beer 

x = 99
while (x >= 0){
	console.log(x + " bottles of the beer on the wall " + x + " bottles of beer. Take one down. Pass it around.")

    x--;
  }*/

//Pseudo-code Assignment
//Define number set
/*var = 10
//List numbers 10 through 0 in reverse.
while (x >= 0){ 
//Log each number to the console with a corresponding message. 
//If numbers are more than 10, include the message, "More is Better"
          if (x => 10){
          	console.log("More is better.");
          }
//If numbers are less than 10, include the message, "Less is More"
          else (x < 10){
          	console.log("Less is more.");
          }
      }*/

//Debugger

/*function debugme() {
	var secret = "this is the secret"
	console.log('before debugger');
	debugger;
	console.log('after debugger');
}
debugme();

//More debugging
for(var x = 0; x < 10; x++){
	console.log(x + )
	debugger;
	var y = x + 2; 
	return y
}*/

//Lucky Me! Code Challenge
/*x = 100
function checkFor7 (){

	for(var i = 100; i > 0; i--){

		if(i%7 === 0){
			console.log("Lucky Me!")
		}
		else {
		console.log (i)
	}
  }

}
checkFor7()*/

var x = ["a", "b", "c"];
var arrayGoesHere = document.getElementById("lowerToUpper");

function lowerToUpper(arr){
	for(var i = 0; i < arr.length; i++){
		arr[i] = arr[i].toUpperCase();
	}
	console.log(arr);
	return arr;
}
var thisIsNowUpper = lowerToUpper(x);

arrayGoesHere.innerHTML = thisIsNowUpper;


function add(a,b){

	return a + b;
}


var j = add(1,1);
var k = add(10,10);

