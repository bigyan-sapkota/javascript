let myName = "bigyan      ";
// console.log(myName.length);

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spiderman power is : ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log("bigyan is present in all objects");
};

Array.prototype.arrayBigyan = function () {
  console.log("bigyan is saying hello");
};

// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.arrayBigyan();
// heroPower.arrayBigyan(); // doesn't have access to arrayBigyan

// INHERITANCE------------------------------
const user = {
  name: "bigyan",
  age: 21,
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Older syntax for prototype inheritance
Teacher.__proto__ = user;

// Modern syntax for prototype inheritance
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Bigyan       ";

String.prototype.trueLength = function () {
  console.log(`True length is: ${this.trim().length}`);
};

const myLen = anotherUserName.trueLength();
console.log(myLen);
"sabitri".trueLength();
"binaya".trueLength();
