// const user = new Object(); //singleton object
// const user = {}; // non-singleton object

const user = {};
user.id = "123";
user.name = "Ram";
user.isLoggedIn = false;

// console.log(user);

const regularUser = {
  email: "test@gmial.com",
  fullName: {
    userFullName: {
      firstName: "Bigyan",
      lastName: "Sapkota",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj1);
// console.log(obj3);

// const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject);

const users = [
  { id: 1, email: "g@gmail.com" },
  { id: 2, email: "b@gmail.com" },
];

// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty("id"));

const course = {
  courseName: "js",
  price: 999,
  courseInstructor: "bigyan",
};

// course.courseInstructor
const { courseInstructor: instructor } = course;
// console.log(instructor);

// {
//   "name": "hitesh",
//   "courseName": "javascript",
//   "price": "free"
// }
