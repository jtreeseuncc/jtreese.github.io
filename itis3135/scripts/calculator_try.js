var numzero = 0;
var numone = 1;
var numtwo = 2;
var numthree = 3;
var numfour = 4;
var numfive = 5;
var numsix = 6;
var numseven = 7;
var numeight = 8;
var numnine = 9;
var firstInput;
var secondInput;
var operatorInput;
var lastAnswer;
var inputQueue[3];

const calculatorButtons = calculator.querySelector(".trybuttons");

calculatorButtons.addEventListener("click", //i have no clue where to go from here and it has been a pretty long time so I think i just need to use the tutorial )

function userInput(first, operator, second)
{
	inputQueue.push(second);
	inputQueue.push(operator);
	inputQueue.push(first);
	
	
}


function adding()
{
	inputQueue[0] + inputQueue[2];

}



