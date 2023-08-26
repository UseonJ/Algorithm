let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let judge = [];

for (let i=1; i<=n; i++) {
    let age = Number(input[i].split(' ')[0])
    let name = input[i].split(' ')[1]
    // judge[i-1] = [age,name]
    judge.push([age, name]);
}

judge.sort((a,b) => a[0] - b[0]);

let answer = "";
for (let x of judge) answer += x[0] + " " + x[1] + "\n";
console.log(answer);