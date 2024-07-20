function setUserName(userName) {
  this.userName = userName;
  console.log("called");
}

function createUser(userName, email, password) {
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const chai = new createUser("bigyan", "bigyansapkota@gmail.com", "1to8");
// console.log(chai);
