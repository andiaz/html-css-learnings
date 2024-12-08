let x;

const name = 'John';
const age = 31;

x = 'Hello World, my name is ' + name + ' and I am ' + age + ' years old';

// Template literals - easier to read, recommended, introduced in ES6 / 2015
x = `Hello World, my name is ${name} and I am ${age} years old. This is a test: ${
  10 + 10
}`;

// String properties and methods
const s = 'Hello World';

x = typeof s;
x = s.length;

// Same thing
x = s[1];
x = s.charAt(1);

x = s.__proto__;

// x = s.toUpperCase();
x = s.toLowerCase();

// First occurrence of the letter
x = s.indexOf('e');

x = s.substring(0, 5);

// Starts at 7 and gets the rest of the string
x = s.substring(7);

// same as substring but starts at the end
x = s.slice(-11, -5);

x = '     Hello World';
x = x.trim();

x = s.replace('World', 'Universe');

x = s.includes('World'); // true

x = s.valueOf();

x = s.split(' '); // splits the string into an array where the space is the delimiter

x = s.split(''); // splits the string into an array where each character gets its own array item

console.log(x);
