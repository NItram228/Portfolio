/*
//1
let number_1 = 9;
let number_2 = 6;
let number_3 = 10;
let number_4 = 2;
let number_5 = 3;
let number_6 = 0;

console.log(number_1 / number_2);
console.log(number_3 / number_4);
console.log(number_5 / number_6);

//2

let number_7 = 2;
let number_8 = 3;
let number_9 = 5;
let number_10 = 8;

console.log(number_7 ** number_8);
console.log(number_9 ** number_10);

//3
const age = prompt('write your age')
if ( age >= 18){
    console.log('You are an aduit')
}
else{
    console.log('You are a minor')
}

//4
const moneySpent = prompt ('how much money did you spend')

if(moneySpent >=50000){
    console.log('your discount = 10%')
    console.log(moneySpent * 0.10)
}
else if (moneySpent >= 20000 && moneySpent < 50000 ){
    console.log('your discount = 5%')
    console.log(moneySpent * 0.05)
}
else if ( moneySpent >= 5000  && moneySpent < 20000 ){
    console.log('your discount = 2%')
    console.log(moneySpent * 0.02)
}
else if (moneySpent < 5000) {
    console.log('your discount = 0%')
    console.log(moneySpent)
}

//5
let junior = ' junior'
let middle = ' middel'
let senior = ' senior'
const salary = prompt('how much do you earn?')

if(salary < 1200){
    console.log('you ' + junior)
}
else if(salary >=1200 && salary < 4000){
    console.log('you ' + middle)
}
else if(salary >= 4000){
    console.log('you ' + senior)
}

//6
const password = prompt('write your password')

let ADMIN_PASSWORD = ('js')

if(password === ADMIN_PASSWORD){
    console.log('Welcome!')
}
else if(password == 0){
    console.log('Canceled by user!')
}
else{
    console.log('Access deniad, wrong password')
}

//7

let str = 'I love js'

console.log(str.length)


//8

let password_2 = 'df%hdjsf'
if (password_2.length >=7 && !password_2.includes('%', ';', '№', '?')){
    console.log('password reliable' )
}
else{
    console.log('password not reliable' )
}

//9

let str_2 = 'Amazing SalE, only tonight!,  JavaScript weekly newsletter'
let srtLower = str_2.toLocaleLowerCase()

if (srtLower.includes('spam', 'sale')){
    console.log(':(')
}
else{
    console.log(':)')
}

//10  Message

let taext = 'message' 
let taext_2 = taext.toUpperCase().slice(0,1)

console.log(taext_2)


*/
//11
let country = ['China ', 'Chile ', 'Australia ', 'Jamaica ']
let price = ['100', '250', '170' , '120']
// let country_name = 'Jamaica'
China
Chile 
Australia 
Jamaica 




function countryFunction(){
    const country_name = prompt ('write your country') 
    
    switch (country_name){
        case 'China':
            console.log(country[0] + '= ' + price[0])
        break;
        case 'Chile':
            console.log(country[1] + '= ' + price[1])
        break;
        case 'Australia':
            console.log(country[2] + '= ' + price[2])
        break;
        case 'Jamaica':
            console.log(country[3] + '= ' + price[3])
        break;
        default:
            console.log(':(')
    }
    
    return
}


//12

const age = function(){

    const youAge = prompt('write your age')

    if ( youAge >= 18){
        console.log('You are an aduit')
    }
    else{
        console.log('You are a minor')
    }
    return
}
age();

//13


const passwordFunction = function(){

    const password = prompt('write your password')

    let ADMIN_PASSWORD = ('jqueryismyjam')
    
    if(password === ADMIN_PASSWORD){
        console.log('Welcome!')
    }
    else{
        console.log('Access deniad, wrong password')
    }
    return
}

passwordFunction();

//14
let available = 100
function checkStorage(){

    const ordered = prompt('количество товара в заказе')

    if(ordered < available){
        console.log('The order is accepted, our manager will contact you')
    }
    else{
        console.log('Your order is too large, not enough goods in stock!')
    }
    return
} 

checkStorage()