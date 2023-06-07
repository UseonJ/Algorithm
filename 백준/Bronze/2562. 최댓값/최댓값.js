let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input.map(Number);
let index = -1;
let max = arr.reduce((a,b)=> Math.max(a,b))
index = arr.indexOf(max)
console.log(`${max}\n${index+1}`)