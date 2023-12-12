let classMate = ["Alexis", "Alexis D", "Alice", "Aurélien", "Cassidy", "Damien", "Denis", "Giuseppe", "Hanen", "Huseyin", "Jeremy", "Joshua", "Julien", "Nicolas", "Maoro", "Marvin", "Noé", "Otman", "Tess", "Thomas", "Ugur", "Winona"];
// donne le nombre de ligne qu'il va y avoir 
for (let i = 0; i < classMate.length; i++){
    line(classMate[i]);
}

function line(name){
    let article = document.querySelectorAll('article'); 

    for (let elem of article){
        let section = document.createElement('section');

        // couleur aléatoire
        let maxVal = 0xFFFFFF;
        let randomColor = '#' + Math.floor(Math.random()*maxVal).toString(16);

        // crée un élement p et met chaque nom de la liste avec un background différent
        let para = document.createElement('p'); 
        para.textContent = name; 
        para.style.backgroundColor = randomColor;

        // change la couleur de hex à rgb 
        let hexColor = randomColor.substring(1); 
        let r = parseInt(hexColor.substring(0, 2), 16);
        let g = parseInt(hexColor.substring(2, 4), 16);
        let b = parseInt(hexColor.substring(4, 6), 16);

        // calcule de la brillance de la couleur du background grâce au modèle YIQ → Y = brillance, I = interpolation, Q = quadrature | nous allons ici utilisé la relation entre Y et le rgb :  
        let brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // change la couleur du texte en fonction de la brillance, 128 est le seuil pour distinger une couleur claire ou foncée
        if (brightness > (255/2)) {
            para.style.color = 'black';
        } else {
            para.style.color = 'white';
        }
        
        // .sort() attend en retour des nombres à trier Math.random()-0.5 génère ces nombres qui permet de met dans un ordre alétoire les éléments de classMate 
        classMate.sort(() => Math.random() - 0.5);

        // place les sections dans l'article et place un paragraphe dans chaque section
        section.appendChild(para);
        elem.appendChild(section);
    }
}