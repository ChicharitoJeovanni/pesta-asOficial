function openTab(event, tabName) {
  // Oculta todos los contenidos de las pestañas
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Desactiva todas las pestañas
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Muestra el contenido de la pestaña seleccionada
  document.getElementById(tabName).style.display = "block";

  // Activa la pestaña seleccionada
  event.currentTarget.classList.add("active");
}

// Arreglo con las rutas de las imágenes del carrusel
var images = ["ImagenesCecy1.jpg", "ImagenesCecy2.jpg"]; 

// Índice actual de la imagen mostrada
var currentIndex = 0;

// Función para cambiar la imagen del carrusel cada 3 segundos
function changeImage() {
  // Cambia la imagen
  document.getElementById("carouselImg").src = images[currentIndex];

  // Incrementa el índice para mostrar la siguiente imagen
  currentIndex = (currentIndex + 1) % images.length;
}

// Iniciar el carrusel
setInterval(changeImage, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
