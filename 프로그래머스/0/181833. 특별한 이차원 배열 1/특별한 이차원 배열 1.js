function solution(n) {
    let answer = [];
    for(let i = 0; i<n; i++){
        answer.push(Array.from({ length: n }, (_, id) => i === id? 1 : 0)) 
    }
    return answer;
}

// function solution(n) {
//     return Array(n).fill().map((_, i) => Array(n).fill().map(($, j) => i === j ? 1 : 0));
// }
// 성능적으로 array 만들면서 원하는 위치에 1을 넣는게 더 좋아보임.