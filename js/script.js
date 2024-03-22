const galleryCaption = document.querySelector(".gallery");
const thumbnailsGallery = document.getElementById("thumbnails");

const sources = ['img/land1.jpg','img/land2.jpg','img/land3.jpg','img/land4.jpg']

let elements = '';


for (let i = 0; i < sources.length; i++) {
   elements += `<img src="${sources[i]}" alt="Landscape${i}">`;  
} 

galleryCaption.innerHTML = elements;

thumbnailsGallery.innerHTML = elements;

// Inizia la logica vera e reale per visualizzare gli elementi ciclati

const images = document.querySelectorAll("#carousel img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const imagesThumbnails = document.querySelectorAll("#thumbnails img");


// Creo l'indice del carosello

let currentIndex = 0;

// Aggiungo la classe ACTIVE per vedere l'immagine

images[currentIndex].classList.add("active");

imagesThumbnails[currentIndex].classList.add("active");

// Aggiungo una classe css dinamica per evitare il colore blue al click del prev

images.forEach(function(elemento) {
    elemento.style.userSelect = "none";
});


nextButton.addEventListener("click", function() {

    images[currentIndex].classList.remove("active");   

    imagesThumbnails[currentIndex].classList.remove("active");


    currentIndex++;

    if(currentIndex === images.length  ) currentIndex = 0;

    images[currentIndex].classList.add("active");

    imagesThumbnails[currentIndex].classList.add("active");

})


prevButton.addEventListener("click", function() {

    images[currentIndex].classList.remove("active");

    imagesThumbnails[currentIndex].classList.remove("active");

    currentIndex--;

    if(currentIndex < 0) currentIndex = images.length -1;

    images[currentIndex].classList.add("active");

    imagesThumbnails[currentIndex].classList.add("active");
})



