// This is a single line of code

/*
This is a multi-line comment
console.log('Hello from console.log');

console.log(150);

const x = 100;
*/

// On windows:
// ctrl + / to comment out current / selected lines of code
// alt + down or up to move lines of code
// alt + shift + down or up to duplicate lines of code

console.log(x);
console.error(x);
console.warn(x);

console.table({
  name: 'John',
  age: 30,
  city: 'New York',
});

console.group('Group 1');
console.log('This is the first log');
console.log('This is the second log');
console.groupEnd();

console.group('Group 2');
console.log('This is the first log');
console.log('This is the second log');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green;';
console.log('%c This is a styled log message', styles);
