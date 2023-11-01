//JS for T&Cs modal box

// Get the modal
var tcModal = document.getElementById("tcModal");

// Get the button that opens the modal
var tcBtn = document.getElementById("tclink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("tcClose")[0];

// When the user clicks the button, open the modal 
tcBtn.onclick = function() {
  tcModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  tcModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //if (event.target == tcModal) {
    //tcModal.style.display = "none";
  //}
//}