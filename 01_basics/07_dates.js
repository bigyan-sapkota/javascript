// Dates------------------------------------------------------
let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate); // OUTPUT : object

// console.log(myDate.toString());
// console.log(`
//     toDateString : ${myDate.toDateString()}
//     toISOString : ${myDate.toISOString()}
//     toJSON: ${myDate.toJSON()}
//     toLocaleDateString: ${myDate.toLocaleDateString()}
//     toLocaleString: ${myDate.toLocaleString()}
//     toLocaleTimeString: ${myDate.toLocaleTimeString()}
// `);

// let myCreatedDate = new Date(0, 0, 23); // The month starts from 0 in js
// let myCreatedDate = new Date("2024/07/13"); // The month starts from 01
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); //1720856343631
// console.log(myCreatedDate.getTime()); //1673633700000
// console.log(Math.floor(Date.now() / 1000)); // for getting seconds

let newDate = new Date();
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(
//   newDate.toLocaleString("default", {
//     weekday: "long",
//   })
// );
