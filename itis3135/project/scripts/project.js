$(document).ready(function(){
	
	
	$.getJSON("content/lesson1.json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#videoContent").append("<h3>" + value.title  + "</h3>" 
					+  "<iframe width='720' height='480' src='" + value.video + "'>")	
					});
			}); 
		});
		
	$.getJSON("content/foundation1.json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#foundationVideo").append("<h3>" + value.title  + "</h3>"
					+  "<iframe width='720' height='480' src='" + value.video + "'>"); 
				}); 
			}); 
		});	
		
		
	$.getJSON("content/lesson1.json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#lessonContent").append("<h3>" + value.title  + "</h3>"); 
				}); 
			}); 
		});
		
	PDFObject.embed("content/lesson1.txt", "#embeddedFoundation");
		
	PDFObject.embed("content/lesson1.txt", "#embeddedPDF");
	
	PDFObject.embed("content/profBio.txt", "#embeddedBio");
	
	$('#lessonButtons a').click(function(){
		
		var lessonName = this.innerHTML.toLowerCase();
		var jsonName = lessonName.replace(/\s+/g, '');
		var parentNode = document.getElementById("lessonContent")
			while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
			}
			
			
		
		$.getJSON("content/"+jsonName+".json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#lessonContent").append("<h3>" + value.title  + "</h3>"); 
				}); 
			}); 
		});
	
		PDFObject.embed("content/" + jsonName +".txt", "#embeddedPDF");
	});
	
	
	$('#foundationButtons a').click(function(){
		
		var lessonName = this.innerHTML.toLowerCase();
		var jsonName = lessonName.replace(/\s+/g, '');
		var parentNode = document.getElementById("foundationVideo")
			while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
			}
			
		$.getJSON("content/"+jsonName+".json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#foundationVideo").append("<h3>" + value.title  + "</h3>" 
					+  "<iframe width='720' height='480' src='" + value.video + "'>")	
					});
			}); 
		});
		PDFObject.embed("content/" + jsonName +".txt", "#embeddedFoundation");
	});
	
	
	
	
	
$('#videoButtons a').click(function(){
		
		var lessonName = this.innerHTML.toLowerCase();
		var jsonName = lessonName.replace(/\s+/g, '');
		var parentNode = document.getElementById("videoContent")
			while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
			}
			
		$.getJSON("content/"+jsonName+".json",function(data){
			$.each(data, function() { 
				$.each(this, function(key, value) { 
					$("#videoContent").append("<h3>" + value.title  + "</h3>" 
					+  "<iframe width='720' height='480' src='" + value.video + "'>")	
					});
			}); 
		});
		
	});
	
});




