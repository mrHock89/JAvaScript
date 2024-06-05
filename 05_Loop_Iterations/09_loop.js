const myNumbers = [1,2,4,6,4,7,8,1,9,10];

const newNum = myNumbers
                        .map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter( (num) => {
                             return num >= 50;
                        });
console.log(newNum);