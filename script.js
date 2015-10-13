// JavaScript Document
"use strict";

(function() {
	window.onload = function() {
		//initializes script to run when page loads.
		var header = document.getElementById("mainHeader");
		window.addEventListener("scroll", function(){
			var num1 = 100-((window.pageYOffset+90)/15);
			var num2 = (window.pageYOffset-90)/25;
			var filter = 'brightness('+num1+'%) blur('+num2+'px)';
			header.style.webkitFilter = filter;       //for Chrome
			header.style.filter = filter;             //for others
		});
	};
})(); 
