let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let testnumber = Number(input[0]);
let data = input[1].split(' ').map(Number);
let maxscore = Math.max(...data);
let newsum = 0;
for (let i=0; i< data.length; i++) {
    newsum += (data[i]/maxscore);
  }
let newaverage = (newsum / data.length * 100).toFixed(4);
console.log(newaverage);