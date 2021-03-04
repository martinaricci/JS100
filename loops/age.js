let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question("What's your age?\n"));

for (let future = 10; future <= 40; future += 10) {
    console.log(`In ${future} years, you will be ${future + currentAge} years old.`);
}