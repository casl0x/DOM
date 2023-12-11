// ajout l'attribut title à tous les éléments importants avec la valeur 'This is an important item!'
let importantElements = document.querySelectorAll('.important');
for (let impItems of importantElements){
    impItems.setAttribute('title', 'This is an important item!');
}

// fait disparaitre toute les images qui ne sont pas importante
let images = document.querySelectorAll('img');
for (let elementImg of images){
    if (!elementImg.classList.contains('important')){ // ! → sélectionne l'inverse de ce qui est demandé 
        elementImg.style.display = 'none';
    }
}

// afficher contenu + classe des paragraphe dans la console 
let paraph = document.querySelectorAll('p');
for (let elementP of paraph){
    if (elementP.classList.length > 0){ // sélectionne les paragraphes qui ont une longueur supérieur à 0 → qui ont une classe
        console.log(elementP);
    }
}

// couleur aléatoire pour chaque paragraphes qui ne contient pas de classe
let colorText = document.querySelectorAll('p');
for (let colorP of colorText){
    if (colorP.classList.length === 0){ // sélectionne les paragraphes qui ont une longueur de classe de 0 → pas de classe 
        let maxVal = 0xFFFFFF; // crée le nombre maximum de couleur possible 
        let randomColor = '#' + Math.floor(Math.random()*maxVal).toString(16) // crée une couleur aléatoire
        colorP.style.color = randomColor;
    }
}