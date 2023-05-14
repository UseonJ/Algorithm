let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let len = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let min=1000001;
let max=-1000001;
arr.map(el=>{
    if(el < min) min = el;
    if(el > max) max = el;
 })
console.log(min, max);