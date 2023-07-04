let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for(i=1; i<num+1; i++){
    let repeat = input[i].split(' ')[0]
    let msg = input[i].split(' ')[1]
    let result = ""
    for(j=0; j<msg.length; j++) {
        result += msg.charAt(j).repeat(repeat)
    }
    console.log(result)
}