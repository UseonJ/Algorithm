let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input[0].split(' ').map(Number);

let sorted = [];
sorted[0] = Math.min(...data)
sorted[2] = Math.max(...data)
sorted[1] = data.filter(x => (x !== Math.min(...data))&&(x !== Math.max(...data)))[0]

console.log(sorted[0],sorted[1],sorted[2])