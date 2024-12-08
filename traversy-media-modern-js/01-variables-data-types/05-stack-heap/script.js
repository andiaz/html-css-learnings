// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley'; // Changing the reference value which means both person and newPerson will be changed since reference values are stored in the heap and accessed via the same place

console.log(name, newName);
console.log(person, newPerson);
