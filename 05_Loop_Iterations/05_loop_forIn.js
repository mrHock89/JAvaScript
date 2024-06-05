// We use for in for object

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    c: "C",
    rb: "Ruby"
}
// console.log(myObject);
// console.log(myObject['js']);

for(const key in myObject){
    // console.log(key);
}
for(const key in myObject){
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// This will print index value of an array
const programming = ['Js', 'cpp', 'c', 'java', 'php']
for (const key in programming) {
    // console.log(key)
}

// This will print value of the array
for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map();
map.set('IN', 'India')
map.set('US', 'America')
map.set('Fr', 'France')

for(const key in map){
    console.log(key);
}