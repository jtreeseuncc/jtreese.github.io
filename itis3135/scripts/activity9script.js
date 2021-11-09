//js file
	var pictures = ["images/babytapir.jpg", "images/Tapirus_indicus1.jpg", "images/tapirink.jpg", "images/tapirbook.jpg", "images/kidtapirdrawing.jpg", "images/tapirdead.jpg"];
	var alts = ["Baby tapir and mama", "Mighty Tapir", "Ink drawing of tapir", "Book with a drawing of a tapir", "Child's rendition of a tapir", "Tapir, but he dead"];
/** references in this function: 

Jquery API Library:
https://api.jquery.com/appendTo/

**/
$(function() 
{
	
	
	$("<ul id='unorderedlist'>").appendTo(".photolist");
   
	for(var i=0; i < pictures.length; i++)
	{
		var li = document.createElement('li');
		li.id = "list_" + [i];
		$(li).appendTo('#unorderedlist');
		var a = document.createElement('a');
		$(a).appendTo(li);
		var img = document.createElement('img');
		img.setAttribute("height", 150);
		img.setAttribute("width", 150);
		img.setAttribute("alt", alts[i]);
		img.src = pictures[i];
		img.setAttribute("class", "clickable");
		img.id = "image_" + [i];
		$(a).append(img);
	}
	
});
/**references in this function: 

Stack Overflow 
https://stackoverflow.com/questions/21843291/how-do-i-know-which-li-element-was-clicked-from-a-ul/21843331

Traversy Media
https://www.youtube.com/watch?v=J2HLW4A40X8

Jquery API Library:
https://api.jquery.com/ready/
https://api.jquery.com/load/

**/

$(function()
{	
	$( document ).ready(function()
	{
		
		var img2;
		var parentNode = document.getElementById("parentNode");
		$("img").click(function()
		{
			parentNode.removeChild(parentNode.lastElementChild);
			img2 = document.createElement("img");
			img2.setAttribute("src", this.getAttribute("src"));
			img2.setAttribute("alt", this.getAttribute("alt"));
			$(img2).appendTo('.inner-slider');
			});
		if(img2 == null)
		{
			var img0 = document.getElementById("image_0");
			var imgDefault = document.createElement("img");
			imgDefault.setAttribute("src", img0.getAttribute("src"));
			imgDefault.setAttribute("alt", img0.getAttribute("alt"));
			$(imgDefault).appendTo('.inner-slider');
		}
		$("#startButton").click(function()
		{
			var pic = 1;
			
			var slideShowPlayersetInterval = setInterval(function()
			{ 
				var nextId = "image_" + pic;
				var nextImg = document.getElementById(nextId);
				img2 = document.createElement("img");
				img2.setAttribute("src", nextImg.getAttribute("src"));
				img2.setAttribute("alt", nextImg.getAttribute("alt"));
				parentNode.removeChild(parentNode.lastElementChild);
				$(img2).appendTo('.inner-slider');
				pic++;
				if(pic > 5)
				{
					pic = 0;
				}
					
			}, 5000);	
			$("#stopButton").click(function()	
			{
				clearInterval(slideShowPlayersetInterval);
			});
		});
		
			
	});
});


$('.slideshow').find([i]).show();
