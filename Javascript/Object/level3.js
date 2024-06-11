// Q1: Create a function that takes the 'person' object as input and returns the age group based on the age.
// Age groups: 'Child' (0-12), 'Teen' (13-19), 'Adult' (20-59), 'Senior' (60 and above)
// Expected output for person1: 'Adult'
const person1 = { name: 'John', age: 30 };
function ageTeller(person)
{
  if(person.age >=0 && person.age <= 12 ){
    console.log('Child');
    }
  if(person.age >=13 && person.age <= 19 ){
    console.log('Teen');
    }
  if(person.age >=20 && person.age <= 59 ){
    console.log('Adult');
    }
  if(person.age >=60 ){
    console.log('Senior');
    }
}
ageTeller(person1);

// Q2: Create a function that takes the 'inventory' object and returns the total number of items in stock.
// Expected output for inventory2: 23
const inventory2 = { apples: 10, bananas: 5, oranges: 8 };
function totalStock(inventory)
{
  const arr=Object.values(inventory);
  let sum = 0;
  arr.forEach((item, id)=>{
  sum = sum + item;
  })
return sum;
}
totalStock(inventory2);

// Q3: Create a function that takes the 'students' object and returns an array of student names.
// Expected output for students3: ['Alice', 'Bob', 'Emma']
const students3 = { student1: 'Alice', student2: 'Bob', student3: 'Emma' };
function nameArr(students)
{
  return Object.values(students);
}
nameArr(students3);

// Q4: Create a function that takes the 'details' object and checks if all properties have values.
// Expected output for details4: true
const details4 = { name: 'John', age: 25, city: 'New York' };
function checkValues(details)
{
  if(Object.values(details))
  {
    console.log(true);
  }
  else
    return false;
}
checkValues(details4);

// Q5: Create a function that takes the 'products' object and returns the average price of all products.
// Expected output for products5: 116.67
const products5 = { product1: { name: 'Laptop', price: 800 }, product2: { name: 'Phone', price: 100 }, product3: { name: 'Tablet', price: 150 } };
function averagePrice(products)
{ 
  totalPrice = products.product1.price+products.product2.price+products.product3.price;
  return totalPrice/3; 
}
averagePrice(products5);



// Q6: Create a function that takes the 'scores' object and returns the highest score.
// Expected output for scores6: 95
const scores6 = { math: 85, science: 90, english: 95 };
function highScore(scores)
{
  const a = Object.values(scores6);
  return Math.max(...a);
}
highScore(scores6);


// Q7: Create a function that takes the 'employees' object and returns the average salary.
// Expected output for employees7: 55000
const employees7 = { emp1: { name: 'John', salary: 60000 }, emp2: { name: 'Alice', salary: 50000 }, emp3: { name: 'Bob', salary: 55000 } };
function avgSalary(employees){
  return (employees.emp1.salary+employees.emp2.salary+employees.emp3.salary)/3
}
avgSalary(employees7);

// Q8: Create a function that takes the 'data' object and returns an array of values sorted in ascending order.
// Expected output for data8: [25, 'John', 'New York']
const data8 = { name: 'John', age: 25, city: 'New York' };

function ascSort(data){
   return  Object.values(data).sort();
}
ascSort(data8);

// Q9: Create a function that takes the 'order' object and calculates the total cost based on quantity and price.
// Expected output for order9: 150
const order9 = { item: 'Laptop', quantity: 2, price: 75 };

function totalCost(order){
  const sum = order.quantity * order.price;
  return sum;
}
totalCost(order9);

// Q10: Create a function that takes the 'expenses' object and returns the total amount spent.
// Expected output for expenses10: 500
const expenses10 = { rent: 200, groceries: 150, utilities: 100, entertainment: 50 };

function totalAmt(expenses)
{
  const arr = Object.values(expenses);
  arr.reduce((total, item)=>{
    total = total + item;
    return total;
 },0);
}
totalAmt(expenses10);
//o/p not showing in runjs
