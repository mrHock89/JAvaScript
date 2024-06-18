// 
//challange is to create truelength() method for every string which will give true length of the scrting.

let myHeros = ["thor", "spiderman"];
let herroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.manoj = function(){
    console.log(`Manoj is present in all objects.`)
};

Array.prototype.heyManoj = function(){
    console.log(`manoj says hello`)
}

// herroPower.manoj();
myHeros.manoj();
myHeros.heyManoj();
// herroPower.heyManoj();



// inheritance
