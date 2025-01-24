function solution(food) {
    let resultArr = []
    food.slice(1).map(a => a%2===0? a/2 : Math.floor(a/2))
        .map((a,i) => {
             for (let j=0; j<a; j++) {
        resultArr.push(i+1)
        }
    })
    return resultArr.join('') + "0" + resultArr.reverse().join('') 
}

// 문자 반복에는 String repeat 잊지말자.
// Function solution(food) {
//     let res = '';
//     for (let i = 1; i < food.length; i++) {
//         res += String(i).repeat(Math.floor(food[i]/2));
//     }

//     return res + '0' + [...res].reverse().join('');
// }