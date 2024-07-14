// var c = 300;

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  //   console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "bigyan";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  //   two();
}

// one();

if (true) {
  const username = "bigyan";

  if (username === "bigyan") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// ----------------------- INTERESTING ------------

// console.log(addOne(2));
function addOne(val) {
  return val + 1;
}

const addTwo = function (num) {
  return num + 2;
};
// console.log(addTwo(5));
