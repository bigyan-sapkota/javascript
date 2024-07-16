const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const initialValue = 0;
// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//   console.log(`Acc: ${accumulator} and currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, initialValue);

// console.log(myTotal);

const shoppingCart = [
  { itemName: "Js course", price: 9999 },
  { itemName: "java course", price: 11999 },
  { itemName: "dsa", price: 14999 },
  { itemName: "devops", price: 10999 },
];

const totalPriceOfCart = shoppingCart.reduce(
  (acc, item) => acc + item.price,
  0
);
console.log(totalPriceOfCart);
