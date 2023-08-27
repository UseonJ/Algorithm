let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
arr.sort((a,b) => a-b)

let cnt = 0;
for(let i=0; i<n; i++) {
    for(let j=0; j<=i; j++) cnt += arr[j]
}

console.log(cnt);
                                  