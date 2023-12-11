console.log(document.title);
document.title = 'Modifying the Dom';
document.body.style.backgroundColor = '#FF69B4';
document.body.style.backgroundColor = 'rgb(88, 188, 127)';

let everySecondChild = document.body.children;
for (let child of everySecondChild) {
    console.log(child);
}