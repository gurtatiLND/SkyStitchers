//JS for Disclaimer modal box 

// Get the modal
var discModal = document.getElementById("disclModal");

// Get the button that opens the modal
var discBtn = document.getElementById("discllink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("disClose")[0];

// When the user clicks the button, open the modal 
discBtn.onclick = function() {
  discModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  discModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //if (event.target == discModal) {
    //discModal.style.display = "none";
  //}
//}