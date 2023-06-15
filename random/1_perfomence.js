const startTime = performance.now()

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const endTime = performance.now()

console.log(`this loop took ${startTime, '-', endTime}`);