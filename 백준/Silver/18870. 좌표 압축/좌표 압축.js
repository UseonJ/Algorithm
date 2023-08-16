let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let ua = [...new Set(arr)];
ua.sort((a,b) => a - b);

let myMap = new Map();
for (let i = 0; i < ua.length; i++) {
    myMap.set(ua[i], i);
}

answer = "";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);

