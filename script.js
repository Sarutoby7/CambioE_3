var botonToggleVisibilidad = document.getElementById('toggleVisibilidad');
var parrafoTexto = document.getElementById('texto');

botonToggleVisibilidad.addEventListener('click', function() {
    if (parrafoTexto.style.display === 'none') {
        parrafoTexto.style.display = 'block';
        botonToggleVisibilidad.textContent = 'Ocultar Texto';
    } else {
        parrafoTexto.style.display = 'none';
        botonToggleVisibilidad.textContent = 'Mostrar Texto';
    }
});
