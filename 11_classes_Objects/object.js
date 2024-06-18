function multyPly(num){
    return num * 5;
};
// console.log(multyPly(5));
// multyPly.power = 2;
// console.log(multyPly.power);
// console.log(multyPly.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Pice is ${this.score}`);
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();