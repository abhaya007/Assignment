// Q1: Extract and return the 'firstName' and 'lastName' properties as a single string from the 'person' object.
// Expected output:
// 'John Doe'
const person1 = { firstName: 'John', lastName: 'Doe', age: 30 };
console.log(person1.firstName+' '+person1.lastName)

// Q2: Create a new object by merging the 'details1' and 'details2' objects.
// Expected output:
// { name: 'John', age: 25, city: 'New York', hobby: 'Soccer' }
 const details1 = { name: 'John', age: 25 };
const details2 = { city: 'New York', hobby: 'Soccer' };
const merged = {...details1, ...details2};
console.log(merged);

// Q3: Add a new property 'quantity' with the value 10 to the 'product' object, if it doesn't already exist.
// Expected output:
// { name: 'Laptop', price: 800, quantity: 10 }
const product3 = { name: 'Laptop', price: 800 };
if(!product3.quantity){  
  product3.quantity = 10;
}
console.log(product3);

// Q4: Check if all properties ('make', 'model', 'year') exist in the 'car' object.
// Expected output:
// false
const car4 = { make: 'Toyota', year: 2021 };
checkProp = 'make' in car4 && 'model' in car4 && 'year' in car4;
console.log(checkProp);

// Q5: Create a copy of the 'student' object without modifying the original object.
// Expected output:
// { name: 'Alice', age: 20, grade: 'A' }
const student5 = { name: 'Alice', age: 20, grade: 'A' };
const copy = {...student5};
console.log(copy);

// Q6: Check if the 'address' property in the 'user' object is a string.
// Expected output:
// true
const user6 = { name: 'John', age: 30, address: '123 Main St' };
if (typeof(user6.address)=== 'string'){
  console.log(true);
}
else 
  console.log(false);

  // Q7: Retrieve the keys of the 'inventory' object as an array.
// Expected output:
// ['apples', 'bananas', 'oranges']
const inventory7 = { apples: 10, bananas: 5, oranges: 8 };
const arr= Object.keys(inventory7);
console.log(arr);

// Q8: Create an array of all the property values from the 'data' object.
// Expected output:
// ['John', 25, 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };
console.log(Object.values(data8));

// Q9: Check if any property in the 'book' object has a value of null.
// Expected output:
// false
const book9 = { title: 'JavaScript Basics', author: 'John Smith', year: 2020 };
if(Object.values(book9).includes(null)
  {
    conslole.log(true);
  }
else
  console.log(false);

  // Q10: Reverse the 'fullName' property value in the 'person' object.
// Expected output:
// 'doe John'
const person10 = { fullName: 'John doe' };
reversedName = person10.fullName.split(' ').reverse().join(' ');
console.log(reversedName);
