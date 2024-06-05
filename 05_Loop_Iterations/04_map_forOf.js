const map = new Map();
map.set('IN', 'India')
map.set('US', 'America')
map.set('Fr', 'France')

// console.log(map);
// console.log(map.get('IN'));
// map.set('IN', 'BHARAT')
// console.log(map);
// console.log(map.get('IN'));

for(const [key, value] of map){
    // console.log(key, ':-', value);
}

// forOf for  object
const myObject = {
    game1: "CodM",
    game2: "Warzone",
    game3: "Apex Legends"
}

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }