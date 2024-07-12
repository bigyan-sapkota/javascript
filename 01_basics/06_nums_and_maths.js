const score = 400;
// console.log(score);

const balance = new Number(400);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const number2 = 1123.8944;
// console.log(number2.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));
// console.log(Number.MAX_VALUE);

// ----------------------MATHS-----------------------
// console.log(Math);
// console.log(Math.abs(-4)) // output : 4
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(5.9));
// console.log(Math.min(5, 10, 20, 44, 2, 0));

const numberRandom = Math.floor(Math.random() * 10);
// console.log(numberRandom + 1);

const min = 10;
const max = 20;

console.log(min + Math.floor(Math.random() * (max - min + 1)));
