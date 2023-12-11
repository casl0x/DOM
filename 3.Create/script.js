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

        // crée un élement p et y met chaque nom de la liste avec un background différent
        let para = document.createElement('p'); 
        para.textContent = name; 
        para.style.backgroundColor = randomColor;
        
        // place les sections dans l'article et place un paragraphe dans chaque section
        section.appendChild(para);
        elem.appendChild(section);
    }
}