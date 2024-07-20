const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "ginger",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai not made");
  },
};

Object.defineProperty(chai, "price", {
  //   writable: false,
  enumerable: false,
  //   configurable: false,
});

// console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
