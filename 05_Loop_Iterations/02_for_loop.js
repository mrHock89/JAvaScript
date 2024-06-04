// Learnig break and continue keyword

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
// }
// Learnig break and continue keyword

for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(`Odd numbers`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}