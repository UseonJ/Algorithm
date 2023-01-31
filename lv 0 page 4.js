
//4-1 중복된 문자 제거
// function solution(s) {
//    return [...s].reduce((x,y) => x.includes(y)? x=x:x=x+y)
// }

// console.log(solution("people"))

//4-2 A로 B 만들기
// function solution(b, a) {    
//    return JSON.stringify([...b].reverse())  === JSON.stringify([...a])? 1:0;
// } // 이건 그냥 뒤집기만 하는거고!!

// function solution(b, a) {    
//    return JSON.stringify([...b].sort())  === JSON.stringify([...a].sort())? 1:0;
// }
// console.log(solution("olleh",	"hello"))
// 간만에 내 풀이 좀 좋다..?

//4-3 factorial
// function solution(n) {
//    let divide = 0;
//    let factorial = 1;
//    for(i=2; n>factorial; i++){
//       if(n>=factorial*i) {
//          factorial *= i; 
//          divide = i;
//       }else{
//          return divide;
//       }}
   
// }

// console.log(solution(7))

//function solution(n) {
//    let i = 1;
//    let f = 1;
//    while (f*i < n) f*=++i;
//    return i;
// }

// 4-4 2-dimension
// function solution(num_list, n) {
//     let result = [];
//     for(i=0; i<num_list.length/n; i++){
//         result[i] = [];
//         for(j=0; j<n; j++){
//             result[i].push(num_list[n*i+j])
//         }
//     }
//     return result;
//  }

//  console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2))

//훨씬 간결한 풀이
// function solution(num_list, n) {
//     var answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }

//     return answer;
// }

// 4-5 가장 가까운 수
// 내풀이다냥
// function solution(array, n) {
//     return array.sort((a,b) => a-b).reduce((acc,cu) => Math.abs(n-acc)<=Math.abs(n-cu)? acc=acc:acc=cu)
// }

// 이건 뭐냥

// let solution=(r,n)=>r.map(e=>[e,Math.abs(e-n)]).sort((a,b)=>a[1]-b[1]||a[0]-b[0])[0][0]

// 4-6 응급순위 

// function solution(emergency) {
//     let emergencyCopied = emergency.slice()
//     let first = emergencyCopied.sort((a,b)=>b-a)
//     return emergency.map(x => x = first.indexOf(x) + 1)
//   }

// console.log(solution([3, 76, 24]))

// function solution(emergency) {
//         let first = [...emergency].sort((a,b)=>b-a)
//         return emergency.map(x => x = first.indexOf(x) + 1)
//       }
// spread 문법으로 훨씬 간결하게

