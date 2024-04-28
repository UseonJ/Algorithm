function solution(a, d, included) {
    let answer = 0;
    included.map((bool,i) => {
        if (bool===true) {
            answer += (a + i*d)
        }
    })
    return answer;
}


// function solution(a, d, included) {
//     return included.reduce((acc, flag, i) => {
//         return flag ? acc + a + d * i : acc
//     }, 0)
// }