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