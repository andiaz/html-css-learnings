let x;

const num = new Number(5);
// const num = new Number(5.4567);

x = num.toString();

x = num.length; // undefined
x = num.toString().length; // 1 since 5 is only one character

x = num.toFixed(2); // also makes x a string
x = num.toPrecision(3); // also makes x a string
x = num.toExponential(2); // also makes x a string

x = num.toLocaleString('ar-EG');

x = num.valueOf();

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);
