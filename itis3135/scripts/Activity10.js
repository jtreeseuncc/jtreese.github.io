$(document).ready(function() {

	var pictures = ["images/h1.jpg","images/h2.jpg","images/h3.jpg","images/h4.jpg","images/h5.jpg","images/h6.jpg"];
	var thumbnails =["images/t1.jpg","images/t2.jpg","images/t3.jpg","images/t4.jpg","images/t5.jpg","images/t6.jpg"]
        // preload the image for each link
	for(var i=0; i < pictures.length; i++)
	{
		var li = document.createElement('li');
		li.id = "list_" + [i];
		$(li).appendTo('#image_list');
		var a = document.createElement('a');
		a.setAttribute("href", pictures[i]);
		a.setAttribute("title", "James Allison: 1-" + (i+1));
		$(a).appendTo(li);
		var img = document.createElement('img');
		img.setAttribute("alt", '');
		img.src = thumbnails[i];
		$(img).appendTo(a);
	}
        // set up the event handlers for each link
	$('#image_list a').click(function(){
		  // cancel the default action of each link
		event.preventDefault();
		var currentImg = this.href;
		$('#imageDisplay').fadeOut(3000, function(){
			$('#imageDisplay').attr("src", currentImg);
			$('#imageDisplay').fadeIn(3000, function(){
			});
		});
	});
	
	$('#image_list a').click(function(){
		  // cancel the default action of each link
		event.preventDefault();
		var currentTitle = this.title;
		
		$('#caption').fadeOut(3000, function() {
			$('#caption').text(currentTitle);
			$('#caption').fadeIn(3000, function(){
				$('#caption').css("font-size", "2.0em");
			});
		});
	});
	
		 // move the focus to the first link
		$("li:first-child a").focus();
	
	
			

          

	
   

}); // end ready