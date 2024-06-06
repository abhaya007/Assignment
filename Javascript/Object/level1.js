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

// Q4: Update the value of the 'age' property in the 'person' object to 35.
// Expected output:
// { name: 'Alice', age: 35, city: 'New York' }
const person4 = { name: 'Alice', age: 30, city: 'New York' };
person4.age=35;
console.log(person4);


// Q5: Remove the 'price' property from the 'book' object.
// Expected output:
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
const book5 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, price: 15 };
delete book5.price;
console.log(book5);