console.log(`1`);
// this will run after 3rd console because fo call stack. I t will store in the call stack after finishing the 3rd console then it will execute
setTimeout(function(){
    console.log(`2`)
}, 0)
console.log(`3`);