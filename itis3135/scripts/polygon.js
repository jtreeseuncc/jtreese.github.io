alert("Jaundiced Tapir would like to know, from 1 to 10, How many sides does your shape have? Please input in the form below!");

var notValid = false;

var polygonName;

var textOutput;

var sideNum; 

function validateEntry()
{
	sideNum = document.forms["myForm"]["shapeSide"].value;
	console.log("hi 1");
	if(sideNum < 1 || sideNum > 10)
	{
		notValid = true;
		console.log("hi 2");
		return;
	} 	
	else
	{
		notValid = isNaN(sideNum);
		console.log("hi 3");
	}
	/*if(notValid == true)
	{
		console.log("oof");
		return;
	}*/
	
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
				document.getElementById("output").innerHTML = polygonName;
				
				
			} 	else if(Math.abs(Math.round(sideNum)) == 2)
			{
				polygonName = "digon";
				document.getElementById("output").innerHTML = polygonName;
				
				
			} 	else if(Math.abs(Math.round(sideNum)) == 3)
			{
				polygonName = "triangle";
				document.getElementById("output").innerHTML = polygonName;
				
				
				
			} 	else if(Math.abs(Math.round(sideNum)) == 4)
			{
				polygonName = "quadrilateral";
				document.getElementById("output").innerHTML = polygonName;
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 5)
			{
				polygonName = "pentagon";
				document.getElementById("output").innerHTML = polygonName;
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 6)
			{
				polygonName = "hexagon";
				document.getElementById("output").innerHTML = polygonName;
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 7)
			{
				polygonName = "septagon";
				document.getElementById("output").innerHTML = polygonName;
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 8)
			{
				polygonName = "octagon";
				document.getElementById("output").innerHTML = polygonName;
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 9)
			{
				polygonName = "nonagon";
				document.getElementById("output").innerHTML = polygonName;
				
				
				
			}  	else if(Math.abs(Math.round(sideNum)) == 10)
			{
				polygonName = "decagon";
				document.getElementById("output").innerHTML = polygonName;
				
				
			}  
	} else 
		{
			alert("Please Input a NUMBER from 1 to 10!");
			
		}
}
