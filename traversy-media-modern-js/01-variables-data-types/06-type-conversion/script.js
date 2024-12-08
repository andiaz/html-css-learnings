let amount = 0;

// Change string to number
// amount = parseInt(amount);
// amount = +amount; // most common way to convert a string to a number
// amount = Number(amount);

// Change number to string
// amount = amount.toString();
// amount = String(amount);

// Convert string to decimal
// amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

console.log(amount, typeof amount);

// NaN = Not a Number
console.log(parseInt('abc'));
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);
