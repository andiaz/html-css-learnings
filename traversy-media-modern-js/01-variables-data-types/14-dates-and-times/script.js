let d = new Date();

d = new Date(2021, 6, 10); // translates to July 10th, 2021 since months start at 0

d = new Date(2021, 0, 12, 10, 30, 0); // translates to 12:30:00 on the 12th of January 2021

d = new Date('2021-07-10');

d = new Date('2021-07-10T10:30:00');

d = new Date('2021-07-10T10:30:00.000Z');

d = new Date('2022-07-10');
// stackoverflow is the javascript date always one day off link
// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Interestingly enough it's better to start with the month first
d = new Date('07-11-2021');

d = Date.now(); // mark exact millisecond in time

d = new Date('2022-07-10');

// same as d = d.valueOf();
d = d.getTime(); // returns the exact millisecond in time

d = new Date(1657411200000);

// Timestamp in seconds instead of milliseconds
d = Math.floor(Date.now() / 1000);

console.log(d);
