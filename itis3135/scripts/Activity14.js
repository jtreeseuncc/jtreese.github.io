$(document).ready(function() {
	$('li').click(function(){
		var dataClicked = this.childNodes;
		var parentNode = document.getElementById("main")
			while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
		}
		
		$.getJSON("json_files/"+$(dataClicked).attr("title")+".json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#main").append(  "<h1>" + value.title  + "</h1>" + "<h2>" + value.month  + "</h2>" + "<img src='" + value.image + "'>" + "<p>" + value.text + "</p>"); 
				}); 
			}); 
		})
	})
}); // end ready