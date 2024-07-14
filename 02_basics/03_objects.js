// singleton
// Object.create

// object literals
// NOTE : access value mostly using . not [] in objects
const mySym = Symbol("key1");

const user = {
  name: "Bigyan",
  [mySym]: "mykey1",
  //   age: 18,
  //   location: "Bharatpur",
  //   email: "bigyan@gmail.com",
  //   isLoggedIn: false,
  //   lastLoginDays: ["Sunday", "Monday"],
};

user.email = "bigyan@email.com";
// Object.freeze(user);
user.email = "bigyan@facebook.com";
// console.log(user);

user.greeting = function () {
  console.log("Hello user");
};

user.greeting2 = function () {
  console.log(`Hello user , ${this.name}`);
};

console.log(user.greeting());
console.log(user.greeting2());
