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