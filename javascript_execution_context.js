// Global execution context (EC) is put in 'this' keyword after execution
// browser, node, bun has different execution context (EC)
// in browser, the value of 'this' is window object
// js is single threaded

// Two types of execution context:
// GLOBAL EXECUTION CONTEXT
// FUNCTION EXECUTION CONTEXT

// Eval Execution Context

// -------------------Execution of js code -------------------------------
// PHASE 1 - MEMORY CREATION PHASE / CREATION PHASE (memory is allocated)
// PHASE 2 - EXECUTION PHASE

let val1 = 50;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// -------- How this code is executed in js ----------------
// STEP 1 : GLOBAL EXECUTION (GLOBAL ENVIRONMENT). Now this is allocated in 'this' keyword.
// STEP 2 : MEMORY CREATION PHASE (first cycle )- all variables are gathered and stored
// val1 -> undefined , val2 -> undefined, addNum -> definition (full function block), result1 -> undefined, result2 -> undefined
// STEP 3 : EXECUTION PHASE
// val1 -> 10, val2 -> 5,

// addNum makes another EXECUTIONAL CONTEXT (new variable environment + execution thread)
// MEMORY CREATION and EXECUTION phase again repeats
// for result1 addNum: ++++++++++++
// STEP 1 : Memory Phase => val1 -> undefined , val2 -> undefined,  total -> undefined
// STEP 2 : Execution Phase => num1 -> 10, num2 -> 5, total -> 15, the total value is returned to GLOBAL EXECUTION CONTEXT
// After this, this EXECUTIONAL CONTEXT is deleted (result1 -> 15)

// addNum makes another EXECUTIONAL CONTEXT (new variable environment + execution thread)
// MEMORY CREATION AND EXECUTION phase again repeats
// for result2 addNum: +++++++++++++
// STEP 1 : Memory Phase => val1 -> undefined, val2 -> undefined, total -> undefined
// STEP 2 : Execution Phase => num1 -> 10, num2 -> 2, total -> 12, the total value is returned to GLOBAL EXECUTION CONTEXT
// After this, this EXECUTIONAL CONTEXT is deleted (result1 -> 12)

// CALL STACK ----------------------------------------------------------------------------------
// There will be Global Execution in  stack (at bottom)
// A function lets say one(), (above Global Execution in Stack) is executed and leaves the stack

// EXAMPLE : functions one() , two(), three()
// When one() is being called (is above Global Execution in stack), on top of one() there is two() being executed and similarly on top of two() there is three() being executed
// LIFO( Last in First Out)
// So, three is executed first , then two , then one
