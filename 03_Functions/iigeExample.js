let calculator = (function(){
    let result = 0;

    // Addition
    function add(num1,  num2){
        result =  num1 + num2;
    }

    // Subtraction
    function sub(num1, num2){
        result = num2 - num1;
    }

    return {
        add: add,
        sub: sub,
        getResult: function(){
            return result;
        }
    }
}) ();

calculator.add(6,10);
console.log(calculator.getResult());
calculator.sub(6,10)
console.log(calculator.getResult());
