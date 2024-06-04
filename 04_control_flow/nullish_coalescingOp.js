// syntax

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 5 ?? 10; // 5
console.log(val1)
val1 = null ?? 10; // 10
console.log(val1)
val1 = undefined ?? 10; // 10
console.log(val1)
val1 = null ?? 5 ?? 10; // 5
console.log(val1)
