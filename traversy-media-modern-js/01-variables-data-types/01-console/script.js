console.log('Hello from console.log');

console.log(150);

const x = 100;

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
