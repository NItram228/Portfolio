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

const array = [3, 5, 7, 11, 33, 2, 6];

function getSum(array, callblack){
    let total = 1
    for (let el of array){
    
        if(callblack(el)){
            total *=el;
        } 
    }

    return total;
}

const isGrearterFore = el => el >4;
const isGrearOdd = el => el % 2 !== 0 
const isGrearEven = el => el % 2 === 0;
console.log('return 4:', getSum(array, isGrearterFore))
console.log('return 1:', getSum(array, isGrearOdd))
console.log('return 2:', getSum(array, isGrearEven))