// const user = {
//   username: "bigyan",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from database");
//     // console.log(this.username);
//     console.log(this);
//   },
// };

// const user2 = {
//   username: "bigyan",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     // console.log("Got user details from database");
//     // console.log(this.username);
//     // console.log(this);
//   },
// };

// console.log(user.getUserDetails("bigyan"));
// console.log(this);

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

const userOne = new user("bigyan", 12, true);
const userTwo = new user("hello", 13, false);
// console.log(userOne.constructor);
// console.log(userTwo);

// New creates empty object which is empty
// STEP 1: Object is created
// STEP 2: Constructor function is created(everything you write is passed on into it)
// STEP 3: this keyword is injected
// STEP 4: The function runs
