let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let S = input[0]
let i = Number(input[1])
console.log(S[i-1])
