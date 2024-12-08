const myString = 'hello world';

// solution 1
let myNewString = myString.charAt(0).toUpperCase();
myNewString += myString.slice(1);

// solution 2
let myOtherNewString = myString[0].toUpperCase() + myString.substring(1);

// solution 3, using template literals
let myThirdNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString); // Hello world
console.log(myOtherNewString); // Hello world
console.log(myThirdNewString); // Hello world
