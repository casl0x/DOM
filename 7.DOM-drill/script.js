const list = document.getElementById('mvlist');

const children = list.childNodes;

for (let i=0; i < children.length; i++) {
    const child = children[i];

    if (list.children === 0){
        if (child.textContent === 'Fast and Furious'){
            if (i !== 0) {
                list.insertBefore(mov, list.childNodes[0]);
            }
            child.classList.add('important');
        }
    }
}