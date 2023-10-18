document.addEventListener("DOMContentLoaded", function() {
    const cardBox = document.getElementById("cardBox");
    const keyboardBox = document.getElementById("keyboardBox");
  
    cardBox.addEventListener("animationend", function() {
      // Connect the keyboard to the card here
      keyboardBox.style.position = "absolute";
      keyboardBox.style.bottom = "0";
      keyboardBox.classList.add("keyboard--active");
    });
  });
  