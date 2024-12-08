let x;
let d = new Date(Date.UTC(2024, 11, 8, 19, 21, 22));

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth(); // starts at 0
x = d.getDate();
x = d.getDay(); // day of the week as an integer: 0 = Sunday, 1 = Monday, etc.

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

const paddedDate = d.getDate().toString().padStart(2, '0');

x = `${d.getFullYear()}-${
  d.getMonth() + 1
}-${paddedDate} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

console.log(x);

// Complex test of relative dates
// in miliseconds
var units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

var getRelativeTime = (d1, d2 = new Date()) => {
  var elapsed = d1 - d2;

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (var u in units)
    if (Math.abs(elapsed) > units[u] || u == 'second')
      return rtf.format(Math.round(elapsed / units[u]), u);
};

// test-list of dates to compare with current date
[
  '10/20/1984',
  '10/20/2015',
  +new Date() - units.year,
  +new Date() - units.month,
  +new Date() - units.day,
  +new Date() - units.hour,
  +new Date() - units.minute,
  +new Date() + units.minute * 2,
  +new Date() + units.day * 7,
].forEach((d) =>
  console.log(
    new Date(d).toLocaleDateString(),
    new Date(d).toLocaleTimeString(),
    '(Relative to now) →',
    getRelativeTime(+new Date(d))
  )
);

// Complex number formatting

const numberFormatter = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'SEK',
  minimumFractionDigits: 2,
  maximumFractionDigits: 10,
});

let numberTest = numberFormatter.format(123456).replace('kr', '');
numberTest = numberFormatter.format(123456.77).replace('kr', '');
numberTest = numberFormatter.format(0).replace('kr', '');
numberTest = numberFormatter.format(123456.789).replace('kr', '');

console.log(numberTest);

// Date test
console.log('Yet another date test');
x = d.toLocaleString('en-GB', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'Europe/Stockholm',
});

console.log(x);
