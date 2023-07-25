let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);
numbers.sort((a,b) => a-b)

console.log(numbers[k-1])