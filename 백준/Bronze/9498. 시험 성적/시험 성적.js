let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0]);

function grade(a) {
    if(90 <= a && a <= 100) console.log('A');
    else if (80<= a ) console.log('B');
    else if (70<= a ) console.log('C');
    else if (60<= a ) console.log('D');
    else console.log('F');
} 

grade(data);