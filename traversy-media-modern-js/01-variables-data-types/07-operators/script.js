// 1. Arithmetic operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5; // No remainder

// Concatenation
x = 'Hello' + ' ' + 'World';

// Exponentiation
x = 2 ** 3;

// Increment
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment operators
x = 10;
x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison operators
// Stick to triple equal :)

x = 2 == 2; // true
x = 2 == 4; // false
x = 2 === 2; // true

x = 2 == '2'; // true, double equal does not test type
x = 2 === '2'; // true, evaluates type

x = 2 != 2; // false since 2 is equal to 2
x = 2 !== 2; // false since 2 is equal to 2

x = 2 != '2'; // false, != does not test type
x = 2 !== '2'; // true, evaluates type

x = 10 > 5; // true
x = 10 < 5; // false
x = 10 >= 5; // true
x = 10 <= 5; // false

console.log(x);
