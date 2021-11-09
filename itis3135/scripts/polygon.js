
var notValid = false;

var polygonName;

var textOutput;

var sideNum; 

sideNum = prompt("Jaundiced Tapir would like to know, from 1 to 10, How many sides does your shape have? Please input in the form below!");

if(sideNum == null || sideNum != null)
{
	getShape();
}

function validateEntry()
{
	
	console.log("hi 1");
	if(Math.abs(Math.round(sideNum)) < 1)
	{
		notValid = true;
		return;
	}
	
	else if(sideNum < 1)
	{
		Math.abs(Math.round(sideNum));
		notValid = false;
		return;
	} 	
	else if (isNaN(sideNum) == true)
	{
		notValid = true;
		return;
	}
	else if(Number.isInteger(sideNum) == false)
	{
		Math.abs(Math.round(sideNum));
		return;
	}
	else if(sideNum > 10)
	{
		notValid = true;
		return;
	}
}


function getShape()
{
	validateEntry();
	
	console.log("hi 4");
	if(notValid == false)
	{
		if(Math.abs(Math.round(sideNum)) == 1)
			{
				polygonName = "monogon";
				alert("That is a : " + polygonName);
				
				
			} 	else if(Math.abs(Math.round(sideNum)) == 2)
			{
				polygonName = "digon";
				alert("That is a : " + polygonName);
				
				
			} 	else if(Math.abs(Math.round(sideNum)) == 3)
			{
				polygonName = "triangle";
				alert("That is a : " + polygonName);
				
				
				
			} 	else if(Math.abs(Math.round(sideNum)) == 4)
			{
				polygonName = "quadrilateral";
				alert("That is a : " + polygonName);
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 5)
			{
				polygonName = "pentagon";
				alert("That is a : " + polygonName);
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 6)
			{
				polygonName = "hexagon";
				alert("That is a : " + polygonName);
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 7)
			{
				polygonName = "septagon";
				alert("That is a : " + polygonName);
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 8)
			{
				polygonName = "octagon";
				alert("That is a : " + polygonName);
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 9)
			{
				polygonName = "nonagon";
				alert("That is a : " + polygonName);
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 10)
			{
				polygonName = "decagon";
				alert("That is a : " + polygonName);
				
				
			}  
	} else 
		{
			alert("Please Input a NUMBER from 1 to 10!");
		}
}
