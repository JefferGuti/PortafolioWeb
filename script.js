function filtrarPorCategoria(categoria, botonSeleccionado) {
  const imagenes = document.querySelectorAll('.imagen');
  imagenes.forEach(img => {
    img.style.display = (categoria === 'todas' || img.dataset.categoria === categoria) ? 'block' : 'none';
  });

  // Actualizar estilos de los botones
  const botones = document.querySelectorAll('.categoria-btn');
  botones.forEach(btn => {
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-outline-primary');
  });

  botonSeleccionado.classList.remove('btn-outline-primary');
  botonSeleccionado.classList.add('btn-primary');
}




// ✅ MOSTRAR DETALLE DE IMAGEN (detalle.html)
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const imagenId = params.get("id");

  if (imagenId) {
    const datosImagenes = {
        // Pagina destacados
      Hombre: {
        src: "assets/img/Hombre.jpg",
        titulo: "Día del Hombre",
        descripcion: "Celebración para el día del Hombre.",
        autor: "Jefferson Gutierrez"
      },
       // Pagina destacados
      Mujer: {
        src: "assets/img/Mujer.jpg",
        titulo: "En sus marcas... ¿Listos? ¡A ganar!",
        descripcion: "Celebración para el día de la Mujer.",
        autor: "Jefferson Gutierrez"
      },
       // Portafolio y Hobbies
       BatallaDell: {
        src: "assets/img/BatallaDell.jpg",
        titulo: "Batalla de arqueros",
        descripcion: "Poster diseñado para la marca Dell donde por compras superiores a x cantidad podrias participar por una camiseta de tu equipo favorito.",
        autor: "Jefferson Gutierrez"
      },
      F1: {
        src: "assets/img/F1.jpg",
        titulo: "Cisco & F1.",
        descripcion: "Poster diseñado para la marca Cisco donde por realizar compras de su marca  podrias participar y ganar un pasaporte directo a la F1.",
        autor: "Jefferson Gutierrez"
      },
      Samsung: {
        src: "assets/img/Samsung.png",
        titulo: "Navidad con Samsung",
        descripcion: "Este poster fue diseñado para las promociones ofertadas por Samsung en navidad.",
        autor: "Jefferson Gutierrez"
      },
      DahuaNeon: {
        src: "assets/img/DahuaNeon.jpg",
        titulo: "Gana con Dahua",
        descripcion: "Es el momento de ganar con Dahua, particia por un tv de 50 pulgadas.",
        autor: "Jefferson Gutierrez"
      },
      PremioGenius: {
        src: "assets/img/PremioGenius.jpg",
        titulo: "Premiamos la fidelidad con Genius",
        descripcion: "Campaña generada para Genius donde premiamos la fidelidad por sus compras.",
        autor: "Jefferson Gutierrez"
      },
      DUCATI: {
        src: "assets/img/DUCATI.png",
        titulo: "Pasión por las motos",
        descripcion: "Esta imagen representa mi pasión por las motos y la marca Ducati.",
        autor: "Jefferson Gutierrez"
      },
      Game: {
        src: "assets/img/Game.jpg",
        titulo: "Pasión por los Videojuegos",
        descripcion: "Esta imagen representa mi pasión por los Videojuegos y las plataformas Online.",
        autor: "Jefferson Gutierrez"
      },
      // Fin Galeria
    };

    const imagen = datosImagenes[imagenId];
    if (imagen) {
      document.getElementById("imagen-detalle").src = imagen.src;
      document.getElementById("titulo-imagen").textContent = imagen.titulo;
      document.getElementById("descripcion-imagen").textContent = imagen.descripcion;
      document.getElementById("autor-imagen").textContent = imagen.autor;
    } else {
      document.getElementById("detalle").innerHTML = "<p>Imagen no encontrada.</p>";
    }
  }
});

// ✅ VALIDAR FORMULARIO DE CONTACTO (sobre-nosotros.html)
function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa todos los campos.');
    return false;
  }

  alert('¡Mensaje enviado correctamente!');
  return true;
}
