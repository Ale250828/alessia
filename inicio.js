let slideIndex = 1; // Índice de la imagen actual
showSlides(slideIndex); // Muestra la primera imagen al cargar la página

// Función para cambiar de imagen con las flechas
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Función para ir a una imagen específica usando los puntos
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Función principal para mostrar las imágenes
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("dot");

    // Si llegamos al final, volvemos a la primera imagen
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Si vamos antes de la primera, vamos a la última
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Oculta todas las imágenes
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quita la clase 'active' de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Muestra la imagen actual y marca el punto correspondiente como 'active'
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Opcional: Auto-avance del slider (descomentar para activar)
/*
let autoSlideIndex = 0;
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[autoSlideIndex-1].style.display = "block";
    dots[autoSlideIndex-1].className += " active";
    setTimeout(autoShowSlides, 5000); // Cambia de imagen cada 5 segundos
}
autoShowSlides(); // Llama a la función para iniciar el auto-avance
*/