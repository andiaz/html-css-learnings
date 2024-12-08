// String
const firstName = 'Sarah';

// Number
const age = 30;
const temp = 98.9;

// Boolean
const hasCar = true;

// Null (interestingly enough, a mistake in JS is that null is an object when using typeof - null is actually a data primitive)
const aptNumber = null;

// Undefined
// let undefinedVariable;
const undefinedVariable = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const bigInt = 9007199254740991n;

// Reference types
const numbers = [1, 2, 3, 4, 5];

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

function sayHello() {
  console.log('Hello');
}

const output = sayHello;
console.log(output, typeof output);
