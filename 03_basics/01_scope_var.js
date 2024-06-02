function myNum(num) {
    var newNum = num;
    if(newNum === 1) {
        console.log(`Hello World!`);
        var b = 10;
    }
    else {
        console.log(`Not a Hello World!`);
        let b = 11;
    }
    console.log(b);
}

myNum(3);
myNum(1);
