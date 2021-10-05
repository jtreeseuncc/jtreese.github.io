/* Academic Integrity Code:
	This is mostly not mine it is a tutorial i followed from https://www.javatpoint.com/javascript-calculator
	.My attempt was uploaded as calculator_try and I had little success/
	I am making no claim that this is all my own work, i simply followed the instructions and followed what the activity guide said to do, but with a different tutorial.
	This is my signature assuring that I cited my source for the assignment and am not trying to pass off someone else's code for my own. 
	- Jake Treese
*/	
function insert(num)   
{  
	document.form1.textview.value = document.form1.textview.value + num;  
}  
  
 
function equal()  
{  
	var exp = document.form1.textview.value;  
	if(exp)  
	{  
	document.form1.textview.value = eval(exp)  
	}  
}  
  

function backspace()  
{  
	var exp = document.form1.textview.value;  
	document.form1.textview.value = exp.substring(0, exp.length - 1);  
}  
  
  
