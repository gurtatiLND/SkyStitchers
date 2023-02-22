//JS for Disclaimer modal box 

// Get the modal
var diclModal = document.getElementById("disclModal");

// Get the button that opens the modal
var disclBtn = document.getElementById("discllink");

// Get the <span> element that closes the modal
var disclSpan = document.getElementsByClassName("disclclose")[0];

// When the user clicks the button, open the modal 
disclBtn.onclick = function() {
  disclModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
disclSpan.onclick = function() {
  disclModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    disclModal.style.display = "none";
  }
}