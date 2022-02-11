/*
const makeTransaction =  function(pricePerDroid, orderedQuantity, customerCredits){
    let totalPrice = pricePerDroid * orderedQuantity

    if(totalPrice < customerCredits){
        return "Insufficient funds!";
    }
    else{
        return `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }

}

console.log(makeTransaction(500,10, 50));


//
let total = 0

const numder = function(start, end){
    if(start < end){
        for (let i = start; i < end; i+2) {
            total += i;

        }
        return total;
    }
    else{
        for (let i = end; i < start; i++) {
            total += i;
        }
        return total;
    }
    
}

console.log(numder(0,10));

*/

//
total = 0 
const array = [4, 7, 9, 15, 6, 6, 7, 8, 9, 20];
/*
for(i = 0; i < 20; i+= 1){
    if(array[i] % 2 === 0 ){
        total += array[i]
        console.log(array[i])
    }
}
*/
for(el of array){
    if(el % 2 === 0 ){
        total += el;
    }
}
console.log("result", total)

