let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [Hour, Minute] = input[0].split(' ').map(Number);
let Cook = Number(input[1]);

let totalM = Hour*60 + Minute + Cook;
totalM %= 1440;
let H = parseInt(totalM/60);
let M = totalM%60;

console.log(H + " " + M)
