function createAdder(a){
    return function add(b){
        return a + b
    }
}

const addTo = createAdder(3);
console.log(addTo(5));
