function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    let icon = document.getElementById("icon");
    if (icon.src.includes("dark-icon.png")) {
        icon.src = "images/light-icon.png"; 
        icon.alt = "Modo diurno";
    } else {
        icon.src = "images/dark-icon.png";
        icon.alt = "Modo nocturno";
    }
  }