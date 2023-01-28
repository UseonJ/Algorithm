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
// function solution(my_string) {
    
//     return my_string.split('').filter(x => typeof x === 'number').sort((a,b) => a-b);
// }

// console.log(solution('ab1233'))


//배열 회전시키기
// function solution(numbers, direction) {
//     // 흐음... 범용성을 고려해서 짜볼까.. 문제만 딱 해결할까
//     // 
//     if(direction === 'left'){
//         let leftedNumbers = numbers.push(numbers.shift())
//         return numbers;
//     }
//     else{
//         let rightedNumbers = numbers.unshift(numbers.pop())
//         return numbers;   
//     }
     
// }

// console.log(solution([1, 2, 3], "right"))


// spread문법~
// function solution(numbers, direction) {
//   return direction === "right"
//     ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
//     : [...numbers.slice(1), numbers[0]];
// }


// 가장 큰 수 찾기
// function solution(array) {
//     return array.reduce(function(acc,cv,ci){
//         if( acc[0] < cv ){
//             return acc = [cv,ci]
//         }
//         else{
//             return acc;
//         }
//                             },[0,0])
//     }

// console.log(solution([1,8,3]))



//최댓값 구하기
// function solution(numbers) {
//     const positives = numbers.filter(x => x >= 0).sort((a,b) => b-a)
//     const negatives = numbers.filter(x => x < 0).sort((a,b) => a-b)
//     if(negatives.length >= 2){
//        return positives[0]*positives[1] > negatives[0]*negatives[1]? positives[0]*positives[1]:negatives[0]*negatives[1]
//     }else if(positives.length >=2){
//        return positives[0]*positives[1];
//     }else{
//         return positives[0]*negatives[0]
//     }
//   }

//   console.log(solution([0, -5]))

//3-13 피자 나누기
// function solution(n) {
   // n과 6의 최소공배수.. 이거 저번에 공부하다 말았잖아..ㅠ
   // 일단 6의배수(2x3) , n을 소인수분해 할 경우 2,3 한 개 빼고 전부 곱하면 됨.
   // n을 2,3로 순차적으로 나눠봄 나눠지면 각각의 수로 나눈 n을 n'로 리턴.
   // 기본적으로 6에다가 n' (ex. 100/2 = 50) 곱한다..? 
//    return n%2 === 0? (n%3 === 0? n/6:n/2):(n%3 === 0? n/3:n)
// }
// console.log(solution(35))


//3-12 인덱스 바꾸기
// function solution(my_string, num1, num2) {

//    return my_string.split('').map((x,i) => {
//       if(i===num1) return x = my_string[num2]
//       else if(i===num2) return x = my_string[num1]
//       else return x;
//    }).join('');
// }

// console.log(solution("I love you"	,3,	6))

// 구조분해 너무 좋고... 나두..
// function solution(my_string, num1, num2) {
//    my_string = my_string.split('');
//    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
//    return my_string.join('');
// }

//3-14 외계행성의 나이
// 구조분해 할당 시도해봐..?

// function solution(age) {
//    // 0-9까지만 표현하면 됨. a,b,c,d,e,f,g,h,i,j
//    // let arr = [a,b,c, ...j] = [0,1,2, ...9]
//    // Uncaught TypeError TypeError: 9 is not iterable
//    // 어 이거 이렇게 쓰는게 아닌가봐..
//    // 이건.. 문자를 숫자로 바꿀 때 써야지!! age.charCodeAt(age.length)

//    let stringofN = {0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j'};
//    let result = ''; 
//    while(age>=1){
//       let SA = age.toString()
//       result = stringofN[SA[SA.length-1]] + result    
//       console.log(SA[SA.length-1])   
//       age = ~~(age/10);
//    }

//    return result;
// }

// console.log(solution(120))


//3-16 숫자 찾기
// function solution(num, k) {
//    let stringOfN = num.toString().split('')
//    if(!stringOfN.includes(k.toString())){
//        return -1;}
//      else{
//      return stringOfN.reduce((acc,cu,i)=> {
//         if(Number(cu) === k && acc===0){
//            return acc = i+1
//         }
//         return acc = acc;
//     },0)
//    }
//  }

// console.log(solution(291311,1))

// zzzzㅋㅋㅋㅋㅋㅋㅋ
// function solution(num, k) {
//    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
// }
// 음... 뭐 내꺼가 재사용성이 높다고 할까..? ㅋㅋㅋㅋㅋ


//3-15 369게임
// function solution(order) {
//    return order.toString().split('').filter(x => x.match(/3|6|9/g)).length
// }
// regEX 개같네

//3-17 문자열 정렬하기
// function solution(my_string) {
    
//    return my_string.toLowerCase().split('').sort().join('');
// }
// my_string.toLowerCase().split('') = [...my_string.toLowerCase()] **spread...

//3-18 합성수 찾기
// 소수를 없애면 합성수
// 2의 배수인지 확인(2만 제외)
// n의 제곱근이하만 확인!

// function solution(n) {
//    let result = 0;
//     if(n<=3) return result;
//     else{
//       for(i=4; i<=n; i++){
//          for(j=2; j<=Math.sqrt(i); j++){
//             if(i%j === 0){
//                result++
//                break;
//             }
//          }
               
//       }
//       return result;
//     }
   
// }

// console.log(solution(8))

// 3-19 모스부호(1)
// function solution(letter) {
//    let morse = { 
//       '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
//       '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
//       '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
//       '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
//       '-.--':'y','--..':'z'
//    }
//    return letter.split('').map(x => morse[x]).join('')
// }

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

//4-3 

