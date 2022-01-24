
const firstName = prompt('write your name ', '');
const lastName = prompt('write your last name', '');
const currentYear = prompt('write your current year ', '');
const birthYear = prompt('write your year birth ', '');
let age = currentYear - birthYear;
alert (lastName + ' ' + firstName +' : ' + 'your age '+ age);


document.write(lastName + ' ' + firstName +' : ' + 'your age '+ age);

const yuorArReadi = prompt('yuor ar readi starting?', '')

if (yuorArReadi === 'yas' ) {
    console.log('go play')
} else if (yuorArReadi === 'no'){
    console.log('what a pity')
}
else{
    console.log('please, write yas or no!')
}

let number = 38 % 5;
console.log(number);



 const heading = document.getElementById('title')

 console.dir(heading);

 setTimeout(() =>{
     heading.textContent = 'tima lox'
     heading.style.color = 'red'
     heading.style.textAlign = 'center'
    heading.style.backgroundColor = 'green'
 }, 2000)




//modal window

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function (){
    modal.style.display ='block';
}

span.onclick = function (){
    modal.style.display = 'none'
}

function button_1(){
    var chbox;
    chbox =document.getElementById('one');
    if (chbox.checked){
        alert('hi')
        modal.style.backgroundColor = 'red'
    }
    else{
        alert('bye')  
        modal.style.backgroundColor = 'rgba(158, 155, 155, 0.8)'
    }
}



function main(){
    var depth = parseInt(readline(), 10);

    
}





