const cart = [
    { name: "Dano Milk", price: 500 },
    { name: "Taaza Tea", price: 200},
    { name: 'Fresh Sugar', price:300}

 ]

 const totalCost = (products) => {
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const element = products[i];
        sum += element.price;
    }
    return sum;

 };

 const result = totalCost(cart)
 console.log(result)