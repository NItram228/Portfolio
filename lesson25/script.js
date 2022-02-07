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
        for (let i = start; i < end; i++) {
            total += i;
        }
        console.log(start);
    }
    else{
        for (let i = end; i < start; i++) {
            total += i;
        }
        console.log(end);
    }
    
}

console.log(numder(100,50));
