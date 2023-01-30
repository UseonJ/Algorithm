
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

// 2-dimension
function solution(num_list, n) {
    for(i=0; i<num_list/n; i++){
        [...num_list]
    }
 }