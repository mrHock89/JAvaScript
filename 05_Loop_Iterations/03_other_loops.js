const myArr = [1, 2, 3, 4];
for (const num of myArr) {
    // console.log(num);
}

const myStr = 'Hello World!'
for (const Str of myStr) {
    if(Str == " "){
        continue;
    }else if(Str == "d"){
        break;
    }
    console.log(`String: ${Str}`);
}