// Q1: Retrieve the value of the 'model' property from the 'car' object.
// Expected output:
// 'Civic'
const car1 = { make: 'Honda', model: 'Civic', year: 2020 };
const value= car1['model'];
console.log(value);

// Q2: Add a new property 'color' with the value 'red' to the 'shirt' object.
// Expected output:
// { size: 'large', material: 'cotton', color: 'red' }
const shirt2 = { size: 'large', material: 'cotton' };
const shirt = {size: 'large', material: 'cotton', color: 'red'};
console.log(shirt);

// Q3: Calculate the total price by multiplying the 'quantity' and 'price' properties of the 'product' object.
// Expected output:
// 400
const product3 = { name: 'Laptop', quantity: 2, price: 200 };
console.log(product3.quantity*product3.price);