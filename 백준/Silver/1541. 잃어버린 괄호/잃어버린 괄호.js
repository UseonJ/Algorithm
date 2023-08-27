let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split('-');
let sum = 0;
for (let i = 0; i<arr.length; i++) {
    let piece = arr[i].split('+').map(Number).reduce((a,b) => a+b);
    if (i === 0) sum += piece;
    else sum -= piece;
}

console.log(sum);