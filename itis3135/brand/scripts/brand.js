
function displayData()
{
var y = document.getElementById("yes").checked;
var radioYes = document.querySelector('#yes').value;
if(y == false)
{
	radioYes = "";
} else if(y == true)
{
	radioYes = "Yes"
}

var n = document.getElementById("no").checked;
var radioNo = document.querySelector('#no').value;
if(n == false)
{
	radioNo= "";
} else if(n == true)
{
	radioNo = "No"
}


var selectForm = document.querySelector('#userSelect').value;

var e = document.getElementById("checkEmail").checked;
var emailCheck = document.querySelector('#checkEmail').value;
if(e == false)
{
	emailCheck = "";
}

var c = document.getElementById("checkCall").checked;
var callCheck = document.querySelector('#checkCall').value;
if(c == false)
{
	callCheck = "";
}

var t = document.getElementById("checkText").checked;
var textCheck = document.querySelector('#checkText').value;
if(t == false)
{
	textCheck = "";
}
var np = document.getElementById("checkNopref").checked;
var noPrefCheck = document.querySelector('#checkNopref').value;
if(np == false)
{
	noPrefCheck = "";
}

var inputName = document.querySelector('#userName').value;
var inputPhone = document.querySelector('#userPhone').value;
var inputEmail = document.querySelector('#userEmail').value;

var outputString = "You selected the following" + "<br>"+ "Receive Emails: " + radioYes + " " + radioNo + "<br>" + " You are contacting us to: " + selectForm + "<br>" + " You want to be contacted via: " + emailCheck + " " + callCheck + " " + textCheck + "<br>" + " Contact Preference: " + noPrefCheck + "<br>" + " Name: " + inputName + "<br>" + " Phone Number: " + inputPhone + "<br>" + " Email: " + inputEmail;


document.getElementById("printInfo").innerHTML = outputString;

}

$(document).ready(function($) {
  $(document).on('submit', '#userform', function(event) {
    event.preventDefault();
  });
});