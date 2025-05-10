
function modoOscuro() { // Define una función que se activa al hacer clic en el botón de modo oscuro.
    var element = document.body; // Obtiene una referencia del elemento <body> dentro del documento HTML y la guarda en la variable "element".
    element.classList.toggle("dark-mode"); // Agrega o quita la clase CSS "dark-mode" al elemento <body>, lo que permite activar y desactivar los estilos oscuros mediante CSS.
    let icon = document.getElementById("icon"); // Obtiene una referencia del elemento con ID "icon", que representa el ícono del botón (sol/luna).
    if (icon.src.includes("dark-icon.png")) { // Verifica si el ícono actual es "dark-icon.png", es decir, una luna (modo claro activo).
        icon.src = "images/light-icon.png"; // Si el ícono actual es "dark-icon.png", cambia el ícono por "light-icon.png", que es un sol y representa el modo oscuro activo.
        icon.alt = "Modo diurno";  // Cambia el texto alternativo del ícono a "Modo diurno", útil para accesibilidad.
    } else { // Si el ícono no es "dark-icon.png", significa que está mostrando el sol (modo oscuro activo).
        icon.src = "images/dark-icon.png";  // Cambia el ícono por "dark-icon.png", una luna, que representa el modo claro activo.
        icon.alt = "Modo nocturno";  // Cambia el texto alternativo del ícono a "Modo nocturno".
      }
    let logo = document.getElementById("logo"); // Obtiene el elemento con ID "logo", que contiene el logotipo de la empresa en la barra de navegación.
    if (logo.src.includes("logo-empresa-claro.png")) { // Verifica si el logotipo actual es el de fondo claro 
        logo.src = "images/logo-empresa-oscuro.png"; // Cambia el logotipo a su versión con fondo oscuro, para que se vea bien en modo oscuro.
        logo.alt = "Logo diurno" // // Cambia el texto alternativo del logo a "Logo diurno".
    } else { // Si el logotipo no es el de fondo claro, entonces está usando el de fondo oscuro.
        logo.src = "images/logo-empresa-claro.png" // Cambia el logotipo de vuelta a su versión clara.
        logo.alt = "Logo nocturno" // Cambia el texto alternativo del logo a "Logo nocturno".
    }
  }

/* Script de navegación responsiva que alterna entre un menú horizontal y un menú desplegable (que se muestra al interactuar con un botón)
según el ancho de la ventana del navegador, se ejecuta automáticamente cuando el DOM se ha cargado completamente*/

  document.addEventListener("DOMContentLoaded", () => { //Espera a que el contenido HTML esté completamente cargado antes de ejecutar el codigo 

  const navContainer = document.getElementById('nav-container'); /* Obtiene una referencia del contenedor de navegación por su id.
  Dentro de dicha referencia se insertará dinámicamente el menú horizontal o el desplegable, dependiendo del ancho de la ventana */

  let isDropdown = false; //Variable que indica si el menú actual en pantalla es el menú desplegable o no

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

  function handleResize() { // Declara una función que se encarga de actualizar el tipo de menú (horizontal o desplegable) según el tamaño actual de la ventana del navegador.

    const matches = window.innerWidth < 1200; /* Evalúa si la ventana del navegador es menor a 1200 píxeles de ancho (pensando en pantallas pequeñas, como móviles o tablets)
     // Si es así, la constante "matches" será true */

    if (matches && !isDropdown) { // Si la pantalla es pequeña y actualmente no se está mostrando el menú desplegable...
      navContainer.innerHTML = dropdownNav; // Reemplaza el contenido del contenedor con el HTML del menú desplegable.
      isDropdown = true; // Actualiza la variable de estado para indicar que ahora el menú desplegable está activo.
      window.addEventListener("click", handleDropdownClick); /* Registra un manejador global del evento 'click' para controlar apertura/cierre del menú,
      este listener se activa solo mientras el menú desplegable esté presente. */
    } else if (!matches && isDropdown) { // Si la pantalla es grande y actualmente el menú desplegable está activo...
      navContainer.innerHTML = originalNav; // Reemplaza el contenido del contenedor con el HTML del menú horizontal original.
      isDropdown = false; // Actualiza la variable de estado para indicar que el menú desplegable ya no está activo.
      window.removeEventListener("click", handleDropdownClick); // Elimina el listener del clic global porque ya no se necesita cuando el menú desplegable no está en uso.
    }
  }

  // Ejecuta el script al cargar
  handleResize();

  // Ejecuta el script cuando se cambia el tamaño de la ventana
  window.addEventListener("resize", handleResize);
});



function handleDropdownClick(event) { /* Función que maneja los clics en pantalla cuando el menú desplegable está activo,
  se encarga de abrir o cerrar el menú según dónde haya hecho clic el usuario. */

  const dropdownMenu = document.getElementById("dropdown-menu"); // Obtiene una referencia del menú desplegable
  const isButton = event.target.matches(".dropdown-btn"); // Verifica si el clic fue hecho sobre el botón del menú desplegable.

  if (!dropdownMenu) return; // Si el menú no está presente (por cualquier razón), sale inmediatamente de la función

  if (isButton) { // Si el usuario hizo clic en el botón del menú desplegable...

    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    /* Alterna la visibilidad del menú:
     Si estaba visible (display = block), lo oculta.
     Si estaba oculto (display = none), lo muestra. */
  } else if (!dropdownMenu.contains(event.target)) { // Si el clic no fue dentro del menú desplegable...
    dropdownMenu.style.display = "none"; /* Oculta el menú desplegable, esto ocurre cuando el usuario hace clic fuera del menú y del botón,
    pensando principalmente en los dispositivos móviles. */
  }
}


