const user = {
  username: "Bigyan",
  price: 999,
  welcomeMessage: function () {
    console.log(`Welcome ${this.username}`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Shyam";
// user.welcomeMessage();
// console.log(this);

// function chai() {
//   let username = "Bigyan";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "Bigyan";
//   console.log(this.username);
// };

// chai();

// const chai = () => {
//   let username = "Bigyan";
//   console.log(this);
// };

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => ({
  username: "bigyan",
});

// console.log(addTwo(2, 3));

const myArray = [2, 3, 4, 7, 8];
// myArray.forEach();
