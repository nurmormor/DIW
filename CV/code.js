function toggleDarkMode() {
    // Obtener el botón y el ícono
    const button = document.getElementById('darkModeButton');
    const modeIcon = document.getElementById('modeIcon');
  
    // Cambiar el tema y el ícono al hacer clic
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      modeIcon.classList.remove('moon-icon');
    } else {
      document.body.classList.add('dark-mode');
      modeIcon.classList.add('moon-icon');
    }
  }