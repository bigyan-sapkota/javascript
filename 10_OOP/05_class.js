// // ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const bigyan = new User("bigyan", "bigyan@gmail.com", "123");
// console.log(bigyan.encryptPassword());
// console.log(bigyan.changeUserName());

// behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.password = password;
  this.email = email;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "aasdfasd");
console.log(tea.encryptPassword(), tea.changeUserName());
