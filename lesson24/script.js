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

if(password == ADMIN_PASSWORD){
    console.log('Welcome!')
}
else if(password == 0){
    console.log('Canceled by user!')
}
else{
    console.log('Access deniad, wrong password')
}

