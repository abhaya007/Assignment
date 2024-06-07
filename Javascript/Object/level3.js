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