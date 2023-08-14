let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

 let n = Number(input[0]);
/**let data = []
for(let i=1; i<=n; i++){
  data = [...data, input[i]]  
}
let set = new Set(data);
let compare = (a,b)=>{
    if(a.length < b.length) a-b;
    else a-b;
} 
set.sort(compare)

let answer = ""
for( let word of set) {
   answer = word + "\n" 
}
console.log(answer);
**/

let arr = [];
for(let i=1; i<= n; i++) {
    arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a,b) => {
    if(a.length != b.length) return a.length - b.length;
    else {
        if(a<b) return -1;
        else if(a>b) return 1;
    }
});

for( let x of arr) {
    console.log(x);
}


