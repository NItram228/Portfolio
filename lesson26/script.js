const colors = ['red', 'pink', 'violet', 'green', 'tomato', 'teal'];
const list = document.querySelector('.link');
console.log(list)
console.log(colors);

const links = [];

for (let el of colors) {
    const item = document.createElement('button')
    item.textContent = el;
    console.log(item);
    links.push(item);
}
console.log(links);

list.append(...links);