const name = "bigyan";
const repoCount = 5;

// console.log(name + repoCount + " repo");

// STRING INTERPOLATION
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Declaring string using another syntax
const gameName = new String("bigyan-sp-family");
// console.log(typeof gameName); // output : object
// console.log(gameName); // output: this will give prototypes which are methods
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4); // same goes for (-8, 4) : ignores -ve value
// console.log(newString);

const anotherString = gameName.slice(-8, 4); // starts from last to 8th and first to fourth
// console.log(anotherString);

const newStringOne = " baby   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://bigyan.com/bigyan%20sapkota";
// console.log(url.replace("%20", "-"));
// console.log(url.includes("bigyan"));
// console.log(gameName.split("-"));
