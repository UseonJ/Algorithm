let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);

for (let i=0; i<N; i++){
    let result = ''
    for(let j=0; j<=i; j++){
        result += `*`
    }
    console.log(result)
    result = ''
}
