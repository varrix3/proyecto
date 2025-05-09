
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode"); // Agrega o quita la clase CSS "dark-mode" al elemento <body>, lo que permite activar y desactivar estilos oscuros mediante CSS.
    let icon = document.getElementById("icon"); 
    if (icon.src.includes("dark-icon.png")) { // Cambia el ícono del botón (por ejemplo, un sol o luna) para reflejar visualmente el modo actual.
        icon.src = "images/light-icon.png"; 
        icon.alt = "Modo diurno";
    } else {
        icon.src = "images/dark-icon.png";
        icon.alt = "Modo nocturno";
    }

    let logo = document.getElementById("logo");
    if (logo.src.includes("logo2.png")) { // Cambia la imagen del logotipo para que coincida con el tema seleccionado (claro u oscuro).
        logo.src = "images/logo2-black.png";
        logo.alt = "Logo diurno"
    } else {
        logo.src = "images/logo2.png"
        logo.alt = "Logo nocturno"
    }
  }

/* Script de navegación responsiva que alterna entre un menú horizontal y un menú desplegable (que se activa mediante un botón)
según el ancho de la ventana del navegador, se ejecuta automáticamente cuando el DOM se ha cargado completamente*/

  document.addEventListener("DOMContentLoaded", () => { //Espera a que el contenido HTML esté completamente cargado antes de ejecutar el codigo 

  const navContainer = document.getElementById('nav-container'); /* Obtiene una referencia al contenedor de navegación por su id.
  Dentro de dicha referencia se insertará dinámicamente el menú estándar o el desplegable, dependiendo del ancho de la ventana */

  let isDropdown = false; //Variable que indica si el menú actual en pantalla es desplegable o no

  //Cadena de texto que representa el HTML del menú horizontal
  const originalNav = `
    <div id="nav-links">
      <a href="index.html">Inicio</a>
      <a href="#definicion">Definicion</a>
      <a href="#tipos">Tipos</a>
      <a href="#funciones">Funciones</a>
      <a href="#aplicaciones">Aplicaciones</a>
      <a href="#comparativas">Comparativas</a>
      <a href="#configuracion">Configuración</a>
      <a href="#novedades">Novedades</a>
    </div>
  `;

  // Cadena de texto que representa el HTML del menú desplegable
  const dropdownNav = `
    <div class="dropdown">
      <button onclick="toggleDropdown()" class="dropdown-btn">☰</button>
      <div id="dropdown-menu" class="dropdown-content" style="display: none;">
        <a href="index.html">Inicio</a>
        <a href="#definicion">Definición</a>
        <a href="#tipos">Tipos</a>
        <a href="#funciones">Funciones</a>
        <a href="#aplicaciones">Aplicaciones</a>
        <a href="#comparativas">Comparativas</a>
        <a href="#configuracion">Configuración</a>
        <a href="#novedades">Novedades</a>
      </div>
    </div>
  `;

  function handleResize() {
    const matches = window.innerWidth < 1200; //Evalúa si la ventana del navegador es menor a 1200 píxeles de ancho

    if (matches && !isDropdown) { // Si la ventana del navegador es menor a 1200 píxeles de ancho, se cambia al menú desplegable
      navContainer.innerHTML = dropdownNav;
      isDropdown = true;
    } else if (!matches && isDropdown) { // Si la ventana del navegador es mayor a 1200 píxeles de ancho, se revierte al menú horizontal
      navContainer.innerHTML = originalNav;
      isDropdown = false;
    }
  }

  // Función global que muestra u oculta el menú desplegable al hacerle click a su botón correspondiente
  window.toggleDropdown = function () {
    const menu = document.getElementById("dropdown-menu");
    if (menu) {
      menu.style.display = menu.style.display === "none" ? "block" : "none";
    }
  };

  // Función global que cierra el menú al hacer click fuera del botón y del menú (pensado para moviles)
  window.onclick = function(event) {
    const dropdownMenu = document.getElementById("dropdown-menu");
  
    if (
      dropdownMenu &&
      !event.target.matches('.dropdown-btn') &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  };

  // Ejecuta el script al cargar
  handleResize();

  // Ejecuta el script cuando se cambia el tamaño de la ventana
  window.addEventListener("resize", handleResize);
});



