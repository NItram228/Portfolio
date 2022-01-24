// let name = 'Martin';
// let num = 16;
// let num_2 = 30;
// let bool = false;

// console.log(typeof num)
// console.log(typeof name)
// console.log(typeof bool)
// console.log(typeof num - bool)
// console.log( num / 0)
// console.log(Boolean(''))
// console.log(Boolean(' '))
// console.log(name + num)
// console.log(num_2 + num)


let mainHeading = document.querySelector('h1')
let buttonGreen = document.querySelector('.green')
let buttonRad = document.querySelector('.rad')

function changeColor(){
    mainHeading.classList.add('activ')
    mainHeading.textContent = 'Hi, my name: Nikita'
    buttonGreen.classList.add('color_green')
    buttonRad.classList.add('color_rad')
    buttonGreen.textContent = 'закрой меня '
    buttonRad.textContent = 'нажми нга меня '
}
function resetColor(){
    mainHeading.classList.remove('activ')
    mainHeading.textContent = 'Hi, my name: Martin'
    buttonGreen.classList.remove('color_green')
    buttonRad.classList.remove('color_rad')
    buttonGreen.textContent = 'Click on me '      
    buttonRad.textContent = 'dont click on me '
}


