// Data types are of two types: primitive and non-primitive, on the basis of how they are stored in memory and how they are accessed

// PRIMITIVE : makes a copy from memory and are accessed
// 7 types : string, number, boolean, null, undefined, Symbol, BigInt

// REFERENCE TYPE (NON-PRIMITIVE) : memory reference is directly accessed to us
// Array, Objects, Functions (Their data type is returned object always. Like function object for function but shown function in console)

// QSN: Javascript is dynamically typed or statically typed language?
// ANS: Js is dynamically typed because type checking takes place at runtime or execution type. In static typed language, you need to define the type for variables. This feature is add by typescript to javascript.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // completely empty value
let userEmail; // Also, let userEmail = undefined is valid

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId); // output: false

const bigNumber = 12345n;
// console.log(typeof bigNumber); // output : bigint

const heros = ["bigyan", "avoongers", "spooderman"];
let don = { name: "bigyan", superPower: "Learning Javascript" };
const myFunction = function () {
  console.log("Hello Guitar");
};

// console.log(typeof heros); // output: object
// console.log(typeof don); // output: object
// console.log(typeof myFunction); // output : function (Behind the scene it is function object)

// +++++++++++++++++++++++++++++++++++ STACK, HEAP
// Stack memory is used in primitive type. You get a copy of variable declared.
// Heap memory is used in non-primitive type. You get a reference to original value. So, any changes done will be done in original value.

let myName = "bigyan"; //primitive type

let anotherName = myName;
anotherName = "sapkota";

console.log(myName); // output : bigyan
console.log(anotherName); // output: sapkota (because a copied value of myName is provided as it uses stack)

let userOne = {
  email: "biyan@gmail.com",
  id: "123",
};
let userTwo = userOne;
userTwo.email = "sapkota@gmail.com";
console.log(userOne.email); // output: sapkota@gmial.com (because it uses heap and there is direct reference to memory)
console.log(userTwo.email); // output: sapkota@gmail.com
