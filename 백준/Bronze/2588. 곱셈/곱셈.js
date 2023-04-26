const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const a = input[0]
const b = input[1]

const b100 = b[0]
const b10 = b[1]
const b1 = b[2]

console.log(Number(a)*Number(b1));
console.log(Number(a)*Number(b10));
console.log(Number(a)*Number(b100));
console.log(Number(a)*Number(b));