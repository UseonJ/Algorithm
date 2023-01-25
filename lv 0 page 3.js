//
// function solution(n, t) {
   
//     return Math.pow(n,t);
// }
// ???? 시프트 연산자? 비트 연산자?
// function solution(n, t) {
//   return n << t;
// }

//암호해독
// function solution(cipher, code) {
//     let answer = '';
//     let iter = Math.floor(cipher.length/code)
//     let i = 1;
//     while(i=iter){
//         answer = answer + cipher.slice(i,i+1)
//         i++
//     }
//     return answer;
// }

// ?? 
// function solution(cipher, code) {
//     return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
// }

// function solution(cipher, code) {
//     var answer = "";
//     for (let i = code - 1; i < cipher.length; i += code) {
//       answer += cipher[i];
//     }
//     return answer;
//   }

//소문자대문자 바꾸기
// function solution(my_string) {
// return  my_string.split('').map(x => {
//         if(x.match(/a-z/)){
//            x.toUpperCase()
//         }
//         if(x.match(/A-Z/)){
//             x.toLowerCase()
//          }

//     }).join('')
// // return  my_string.split('').replaceAll(/a-z/g,/A-Z/g)
// }

// solution('aAaA')

//
function solution(my_string) {
    
    return my_string.split('').filter(x => typeof x === 'number').sort((a,b) => a-b);
}

console.log(solution('ab1233'))