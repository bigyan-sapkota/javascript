function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return `Your email is ${this._email.toUpperCase()}`;
    },
    set: function (value) {
      this.email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `Your password is ${this._password.toUpperCase()}`;
    },
    set: function (value) {
      this.password = value;
    },
  });
}

const bigyan = new User("bigyan@bigyan.com", "bigyan");
console.log(bigyan.email);
