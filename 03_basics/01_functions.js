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
console.log(logInUserMessage());
