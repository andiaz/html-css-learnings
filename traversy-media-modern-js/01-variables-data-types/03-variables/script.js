// ways to declare a variable
// var, let, const

// var = original declaration, ES6 introduced let and const. Recommended to use let and const
// let = for variables that can be reassigned
// const = for constants
// bit of a preference which to use. But const is more strict so usually good to start there.

// naming conventions
// only letters, numbers and underscores and dollar signs
// cannot start with a number

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

// Re-assigning a variable
age = 31;

console.log(age);

let score;
score = 1;

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;

const arr = [1, 2, 3, 4, 5];
// const arr = [1,2,3,4,5,6]; // Error

arr.push(6); // OK since you are adding a value and not changing the array key itself

console.log(arr);

const person = {
  name: 'John',
  age: 30,
  city: 'New York',
};

person.age = 31; // OK, changing the value of a key is fine, but not the key itself
console.log(person);

// declare multiple variables at once (also preference, assigning one variable at a time is cleaner)
let a, b, c;
const d = 10,
  e = 20,
  f = 30;
console.log(a, b, c, d, e, f);
