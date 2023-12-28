document.addEventListener('DOMContentLoaded', function(){
    // selection de la liste 
    const ul = document.querySelector('ul');
    const child = ul.childNodes;

    // repérage du film "fast and furious" et le rendre IMPORTANT
    for(let i = 0; i < child.length; i++){
        const elem = child[i];
        if (elem.nodeType === 1){
            if (elem.textContent.includes('Fast and Furious')){
                if (i !== 1){
                    ul.insertBefore(elem, ul.firstChild);
                }
                elem.classList.add('important');
            }
            elem.addEventListener('click', function(){
                if (this.textContent === 'Fast and Furious'){
                    alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
                } else {
                    alert(this.textContent);
                }
            });
        }
    }
    document.addEventListener('keypress', function(e){
        if (e.key === 'r'){
            const itemsArray = Array.from(ul.children);
            const fastAndFurious = ul.querySelector('.important');
            itemsArray.sort(() => Math.random() - 0.5);
            ul.innerHTML = '';
            itemsArray.forEach(item => ul.appendChild(item));
            ul.insertBefore(fastAndFurious, ul.firstChild);
        }else if (e.key === 'd'){
            const fastAndFuriousClone = ul.querySelector('.important').cloneNode(true);
            ul.insertBefore(fastAndFuriousClone, ul.firstChild);
        }
    })

    // selection d'option et change du contenu affiché
    const div = document.createElement("div");
    ul.parentNode.insertBefore(div, ul)

    const select = document.createElement("select");
    const option1 = document.createElement('option');
    option1.textContent = 'important franchises'
    const option2 = document.createElement('option');
    option2.textContent = 'normal franchises'

    select.appendChild(option1)
    select.appendChild(option2)
    div.appendChild(select)

    select.addEventListener('change', function(){
        const allItems = ul.children;
        for (let i =0; i<allItems.length; i++){
            if (this.value === 'important franchises'){
                if (allItems[i].classList.contains('important')){
                    allItems[i].style.visibility = 'visible'
                } else {
                    allItems[i].style.visibility = 'hidden'
                }
            } else {
                allItems[i].style.visibility = 'visible'
            }
        }
    });
});