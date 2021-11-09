var displayCounter = 0;
var person;
var salary;
var userGeneratedSalary;
person = ["James Jonson","Bill Williams","Quenton L'Strange","Ilka Knutson","Fill Swift","Tut Hank Amen","Bingo"];
salary = [];
var tableCounter = 0;
window.onload = function()
{
	
	document.getElementById("userSalaryInput").focus();
	document.getElementById("addSalaries").addEventListener("click", addSalary);
	document.getElementById("resultDisplays").addEventListener("click", displayResults);
	document.getElementById("salaryDisplays").addEventListener("click", displaySalary);
	document.getElementById("dropDownNames").addEventListener("click", populateNames, {once : true});
	document.getElementById("resetForm").addEventListener("click", resetPage);
}


function displayResults()
{
	if(displayCounter > 0)
	{
		const myNode = document.getElementById("results");
	  
		while (myNode.firstChild) 
		{
			myNode.removeChild(myNode.lastChild);
		}
	}
	
	var highest;
	var sum = 0;
	var sumCounter = 0;
	
	for(var i = 0; i < salary.length; i++)
	{
		if(typeof (salary[i]) != 'undefined')
		{
		sum = sum + salary[i];
		sumCounter++;
		}
	}
	
	highest = salary.reduce(function(a, b) { return Math.max(a, b); }, 0)
		
	var average = sum/(sumCounter);
	
	var resultNode = document.getElementById("results");
	
	var displayAvg = document.createElement('p');
	var displayHigh = document.createElement('p');
	
	var header = document.createElement('h2');
	
	header.setAttribute('id', 'resultsHeader');
	
	header.innerHTML = "SALARY INFO";
	displayAvg.innerHTML = "The mean salary is: " + average;
	displayHigh.innerHTML = "The highest salary is: " + highest;
	
	resultNode.appendChild(header);
	resultNode.appendChild(displayAvg);
	resultNode.appendChild(displayHigh);
	
	
	displayCounter++;
}


function addSalary()
{
	var inputSalaryValid  = parseFloat(document.getElementById("userSalaryInput").value);
	var selectedEmployee = document.getElementById("dropDownNames").selectedIndex;

	if(selectedEmployee === 0)
	{
		alert("not a valid employee");
		return;
	}
	if(Number.isNaN(inputSalaryValid) == true || inputSalaryValid < 0) {
		
		alert("That is not a valid number idiot!");
		return;
	}else if(Number.isNaN(inputSalaryValid) == false)
	{	
		userGeneratedSalary = inputSalaryValid;
		salary[selectedEmployee-1] = userGeneratedSalary;
		console.log(salary);
	} 
}


function populateNames()
{
	var employeeNames = document.getElementById("dropDownNames");
	for(var k = 0; k < person.length; k++) 
	{
		var name = person[k];
		var element = document.createElement("option");
		element.textContent = name;
		element.value = name;
		employeeNames.appendChild(element);
	}
}



function resetPage()
{
	const myNode = document.getElementById("results");
	  
	while (myNode.firstChild) 
	{
		myNode.removeChild(myNode.lastChild);
	}
	if(tableCounter > 0)
	{
		const myNode = document.getElementById("results_table");
	  
		while (myNode.firstChild) 
		{
			myNode.removeChild(myNode.lastChild);
		}
	}
	salary = [];
	userGeneratedSalary = null;
	tableCounter = 0;
	displayCounter = 0;
}


function displaySalary()
{
	if(tableCounter > 0)
	{
		const myNode = document.getElementById("results_table");
	  
		while (myNode.firstChild) 
		{
			myNode.removeChild(myNode.lastChild);
		}
	}
	
	var tableNode = document.getElementById("results_table");
	var tableBodyNode = document.createElement("tbody");
	var tableRowNames = document.createElement("tr");
	var tableRowSalary = document.createElement("tr");
	
	for(var n = 0; n < person.length; n++)
	{
		var addDataNodeName = document.createElement("td");
		addDataNodeName.innerHTML = person[n];
		tableRowNames.appendChild(addDataNodeName);
	}
	for(var s = 0; s < salary.length; s++)
	{
		var addDataNodeSalary = document.createElement("td");
		addDataNodeSalary.innerHTML = salary[s];
		tableRowSalary.appendChild(addDataNodeSalary);
	}
	
	tableBodyNode.appendChild(tableRowNames);
	tableBodyNode.appendChild(tableRowSalary);
	tableNode.appendChild(tableBodyNode);
	
	tableCounter++;
}



