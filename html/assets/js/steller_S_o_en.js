/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

function move(){
	let elem = document.getElementById("progress-bar");
	var currentLocation = $('#exampleFormControlSelect1').val();
	let stepValue = 0;
	var canMove = checkLocation();
	if(canMove){
		var id = setInterval(frame, 500);
	}

	function frame(){
		if(stepValue >= 100){
			clearInterval(id);
			window.location.href = 'SuccessPage_o_en.html';
		}else{
			elem.style.width = (stepValue + 10) + "%";
			elem.innerHTML = (stepValue + 10) + "%";
			stepValue = (stepValue + 10);
		}
	}

	function checkLocation(){
		if(currentLocation!= 'Location'){
			return true;
		}
		else{
			alert("Did not choose location!");
			return false;
		}
	}
}
