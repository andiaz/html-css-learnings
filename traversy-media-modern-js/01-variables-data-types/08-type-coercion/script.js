let x;

x = 5 + '5'; // will be converted to a string
x = 5 + Number('5'); // will be converted to a number
x = 5 * '5'; // will be converted to a number
x = 5 + null; // will be converted to a number, null is converted to 0 in this case

x = Number(null); // 0, number
x = Number(true); // 1, boolean
x = Number(false); // 0, boolean

x = 5 + true; // 6, number
x = 5 + false; // 5, number
x = 5 + undefined; // NaN, number

console.log(x, typeof x);
