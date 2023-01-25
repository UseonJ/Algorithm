// 자릿수의 합
// function solution(n) {
//     let Num_string = n.toString()
//     return Num_string.split('').reduce((x,y)=> Number(x) + Number(y))
// }


// console.log(solution(9321))

// function solution(n) {
//     let result = 0;

//     while (n > 0) {
//         result += n % 10;

//         n = Math.floor(n/10);
//     }

//     return result;
// 이걸 하려했는데 }

//@문자열 안의 문자열 - 다른사람 풀이 좀 보고 배워라 그지깽깽아.
// function solution(str1, str2) {
//     //str2의 [0]와 같은 str1[x]에 대하여 
//     //str2길이만큼 잘라낸 문자열이 str2와 같은지 비교
//     let array1 = str1.split('')
//     let result = 2;
//     // console.log(array1.slice(2,5).join(''))
//     for(i=0; i<array1.length; i++){
//         if(array1[i] === str2[0]){
//            if(array1.slice(i,i+str2.length).join('') === str2 ){
//                result =1;
//            }
//         }
//     }
//     return result;
    
//     }


//@제곱수 구하기 - math.sqrt.isinteger 쓰면 될 것 같다.

// function solution(n) {
//    return Number.isInteger(Math.sqrt(n)) ? 1:2 
// }

// console.log(solution(9))

//@sum of hide number
// function solution(my_string) {
// let arrayOfString = my_string.split('')    
// return arrayOfString.filter(x => Number.isInteger(Number(x))).reduce((a,b) => a + b)
// }

// 규식이를 사용한 잡기술도 익혀놓자.
// function solution(my_string) {
//     const answer = my_string.replace(/[^0-9]/g, '')
//                             .split('')
//                             .reduce((acc, curr) => acc + Number(curr), 0);
//     return answer;
// }

//@개미군단
// function solution(hp) {
//     let a = Math.floor(hp/5)
//     let b = Math.floor((hp-5*a)/3)
//     let c = hp-5*a-3*b
//     return a + b + c;
//  }

// 나머지를 활용해보자 처음 하려던 방법

//remove consonants
function solution(my_string) {
    let consonants = ['a','e','i','o','u']
    return my_string.split('').filter(x => !consonants.includes(x)).reduce((a,b) => a + b,'')
    }

// 이 역시 replace + 규식이로 간단해결 가능!!


