// function sayMyName() {
//   console.log("Hello");
// }

// sayMyName();

// function addNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const result = addNumbers(1, 3);
// console.log("result", result);

function logInUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `Welcome ${username}`;
}

// console.log(logInUserMessage("bigyan"));
// console.log(logInUserMessage());

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(2, 3, 4)); //return [4]

const user = {
  username: "bigyan",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is: ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({
//   username: "shyam",
//   price: 399,
// });

const myNewArray = [200, 300, 100, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([2, 3, 4, 5]));
