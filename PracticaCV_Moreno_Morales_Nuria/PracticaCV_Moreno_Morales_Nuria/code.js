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

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenuButton = document.querySelector('.hamburger-menu');
  const navigationBar = document.querySelector('nav ul');

  hamburgerMenuButton.addEventListener('click', function () {
    navigationBar.classList.toggle('active');
  });
});

