// Immediately Invoked Function Expressions (IIFE) - to remove the pollution from global scope
(function chai() {
  // named IIFE
  console.log("DB CONNECTED");
})();

((name) => {
  console.log("DB CONNECTED 2", name);
})("bigyan");
