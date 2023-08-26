let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = input[0];
let cnt = Array(10).fill(0);

for(let x of number) {
    cnt[Number(x)]++;
}

let answer = "";
for(let i = 9; i>= 0; i--) {
    for (let j=0; j < cnt[i]; j++) answer += i + "";
}

console.log(answer);