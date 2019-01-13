  	$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  3000);



	$(document).ready(function() {
		$(".test").mouseenter(function() {
			$(".text").stop(true).fadeIn("1000");
		});
	 

	$(".test").mouseleave(function() {
		$(".text").stop(true).fadeOut("slow");//.stop(true) keeps the fade in/out from looping/flickering
	});
});

//get modal element
var modal = document.getElementById("simpleModal");

//get modal button
var modalBtn = document.getElementById("submitBtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for click event
modalBtn.addEventListener("click", openModal); 
//listen for click event
closeBtn.addEventListener("click", closeModal);

// function to open Modal
  function openModal() {
    modal.style.display = "block";
  }

//function to close modal
  function closeModal() {
    modal.style.display = "none";
  }