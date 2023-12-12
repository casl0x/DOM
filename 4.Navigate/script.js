// bouge le dernier élément à la première place : 
let orderList = document.querySelector('ol')

let last = orderList.lastElementChild; // .lastElementChild sélectionne le dernier enfant du parent
orderList.removeChild(last); // enleve l'enfant selectionner
orderList.insertBefore(last, orderList.firstChild); // rajoute l'enfant en premier après le parent 

// échanger le titre de la section 2 et 3 
let h2VersS3 = document.getElementById('2').querySelector('h2');
let h2VersS2 = document.getElementById('3').querySelector('h2');

let chang = h2VersS3.innerHTML;
h2VersS3.innerHTML = h2VersS2.innerHTML;
h2VersS2.innerHTML = chang;

// faire disparaitre la 3ème section 
let lastSection = document.querySelector('section:last-of-type');
lastSection.parentNode.removeChild(lastSection);