// Javascript is an asynchronous language but its default behavior is synchronous
// It is single threaded language. It's engine is always found in some runtime environment (like node),  which make it feels like it is not single threaded(slow)

// GLOBAL EXECUTION CONTEXT OR EXECUTION CONTEXT
// In a single thread: console.log(1) ---------- console.log(2)
// Each operation waits for the als one to complete before executing
// There is call stack and memory heap

// Blocking Code vs Non Blocking Code
// BLOCKING CODE :- Block the flow of the program. Real file sync
// NON BLOCKING CODE :- Does not block execution. Read file async
// NON BLOCKING CODE is worse because after registration a user may be notified he is registered even if error arrived in-between. So blocking code should be written within the code.

// Figure Explanation : async_js_01.png

// console.log(1)
// setTimeout(function(){console.log(2)}, 0)
// console.log(3)
// output: 1, 3, 0
