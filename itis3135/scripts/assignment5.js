

var name = prompt("What is your name?");

var howDo = prompt("How are you doing today?");

var rightnow = new Date();

const BRAND = "Jaundiced Tapir";

var todaysDate = (rightnow.getMonth()+1) + " " + rightnow.getDate() + ", " + rightnow.getFullYear();

var currentTime = rightnow.getHours() + ":" + rightnow.getMinutes();

document.write("Today is: " + todaysDate + ", and the time is: " + currentTime + "<br><br>");

document.write(BRAND + " welcomes you " + name + "!<br><br>");

document.write("We are either glad or sorry that you are doing: " + howDo + "!<br>");


function loveMe()
{
alert("Absolutely Not");

}

function sayHelloButInSpanish()
{
alert("Hola!");

}
function tapirFacts()
{
	
location.href = "https://www.nationalgeographic.com/animals/mammals/facts/baird-s-tapir";
}

function crash()
{
	var crasharray = [...Array(2**32-1)];
	
}

function colorChange()
{
	
	
	var r =  Math.floor(Math.random() * 255) + 1;;
	var g =  Math.floor(Math.random() * 255) + 1;;
	var b =  Math.floor(Math.random() * 255) + 1;;
	
	document.body.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
	
	
}