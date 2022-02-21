//
const ingredients = ['Potatoes','Mushrooms','Garlic', 'Tomatos','Herbs','Condiments',];
const list = document.querySelector('.link');
console.log(list)

const links = [];

for (let el of ingredients) {
    const item = document.createElement('li')
    item.textContent = el;
    console.log(item);
    links.push(item);
}
console.log(links);

list.append(...links);
  
//2
const pluseBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')  
const dadBtn = document.querySelector('.dad')
let ter = 0;
dadBtn.textContent = ter


pluseBtn.addEventListener('click', () => {
  ter +=1
  dadBtn.textContent = ter
})

minusBtn.addEventListener('click', ()=> {
  ter -=1
  dadBtn.textContent = ter
})