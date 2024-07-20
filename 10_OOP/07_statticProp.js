class User {
  constructor(userName) {
    this.userName = userName;
  }

  logMe() {
    // console.log(`Hey, I am ${this.userName}`);
  }

  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(userName, email) {
    super(userName);
    this.email = email;
  }
}

const bigyan = new User("bigyan");
// console.log(bigyan.createId());

const sapkota = new Teacher("sapkota", "sapkota@gmail.com");
// console.log(sapkota.createId());
