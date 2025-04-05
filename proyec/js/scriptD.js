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

    let logo = document.getElementById("logo");
    if (logo.src.includes("logo2.png")) {
        logo.src = "images/logo2-black.png";
        logo.alt = "Logo diurno"
    } else {
        logo.src = "images/logo2.png"
        logo.alt = "Logo nocturno"
    }
  }

