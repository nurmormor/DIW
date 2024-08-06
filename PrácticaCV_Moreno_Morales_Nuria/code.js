function toggleDarkMode() {
  // Obtener el botón y el ícono
  const button = document.getElementById('darkModeButton');
  const sunIcon = button.querySelector('.icon-tabler-sun');
  const moonIcon = button.querySelector('.icon-tabler-moon');

  // Cambiar el tema y el ícono al hacer clic
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  } else {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  }
}
/*function toggleMenu() {
  var barraNavegacion = document.getElementById("barraNavegacion");
  barraNavegacion.style.display = (barraNavegacion.style.display === "none" || barraNavegacion.style.display === "") ? "block" : "none"; 
  ESTA ERA LA IMPLEMENTACION DE LA LOGICA PARA EL MENU HAMBURGUESA*/
