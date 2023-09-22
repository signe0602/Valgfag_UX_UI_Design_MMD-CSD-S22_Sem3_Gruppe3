function myFunction(id) {
  var moreText = document.getElementById("more" + id);

  // Hvis det ikke er synligt, så gøres det synligt
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    
    // Hvis det allerede er synligt, så gøres det usynligt
  } else {
    moreText.style.display = "none";
  }
}

function toggleBackground(element) {
  element.classList.toggle("clicked");
  }

// Kilder;
// https://www.w3schools.com/howto/howto_js_toggle_class.asp