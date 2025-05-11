document.addEventListener('DOMContentLoaded', () => {
    const imagenGaleria = document.getElementById('imagenGaleria');
    const tituloGaleria = document.getElementById('tituloGaleria');
    const textoGaleria = document.getElementById('textoGaleria');
    const miniaturas = document.querySelectorAll('.galeria-miniaturas .miniatura');
    const btnPrev = document.querySelector('.galeria-prev');
    const btnNext = document.querySelector('.galeria-next');

    let indiceActual = 0; // Para llevar la cuenta de la imagen actual (para los botones)

    // Función para actualizar la imagen principal y la descripción
    function actualizarGaleria(miniaturaElement, index) {
        // Efecto de fundido (opcional pero agradable)
        imagenGaleria.style.opacity = 0;

        setTimeout(() => {
            imagenGaleria.src = miniaturaElement.dataset.imagen;
            imagenGaleria.alt = miniaturaElement.alt.replace('Miniatura ', ''); // Quita "Miniatura " del alt
            tituloGaleria.textContent = miniaturaElement.dataset.titulo;
            textoGaleria.textContent = miniaturaElement.dataset.descripcion;
            imagenGaleria.style.opacity = 1;
        }, 150); // Sincroniza con la duración de la transición de opacidad dividida por 2

        // Actualizar clase 'activa' en miniaturas
        miniaturas.forEach(min => min.classList.remove('activa'));
        miniaturaElement.classList.add('activa');

        indiceActual = index; // Actualiza el índice para los botones de navegación
    }

    // Event listener para cada miniatura (al pasar el ratón O al hacer clic)
    miniaturas.forEach((miniatura, index) => {
        // Si quieres que cambie AL PASAR EL RATÓN:
        miniatura.addEventListener('mouseover', () => {
            actualizarGaleria(miniatura, index);
        });

        // Si prefieres que cambie AL HACER CLIC en la miniatura (descomenta esto y comenta el 'mouseover'):
        /*
        miniatura.addEventListener('click', () => {
            actualizarGaleria(miniatura, index);
        });
        */
    });

    // Event listeners para los botones de navegación (opcional)
    if (btnPrev && btnNext) {
        btnPrev.addEventListener('click', () => {
            indiceActual = (indiceActual - 1 + miniaturas.length) % miniaturas.length;
            actualizarGaleria(miniaturas[indiceActual], indiceActual);
        });

        btnNext.addEventListener('click', () => {
            indiceActual = (indiceActual + 1) % miniaturas.length;
            actualizarGaleria(miniaturas[indiceActual], indiceActual);
        });
    }

    // Inicializar con la primera imagen (si no está ya seteada por la clase 'activa' en HTML)
    // Esto es útil si la primera miniatura no tiene la clase 'activa' por defecto.
    // const primeraMiniaturaActiva = document.querySelector('.galeria-miniaturas .miniatura.activa');
    // if (primeraMiniaturaActiva) {
    //    actualizarGaleria(primeraMiniaturaActiva, Array.from(miniaturas).indexOf(primeraMiniaturaActiva));
    // } else if (miniaturas.length > 0) {
    //    actualizarGaleria(miniaturas[0], 0); // Carga la primera si ninguna está activa
    // }
});