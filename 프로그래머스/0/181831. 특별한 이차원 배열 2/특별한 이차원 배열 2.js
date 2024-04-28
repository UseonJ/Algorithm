function solution(arr) {
    const n = arr.length;
    let answer = 1;
    for ( let i = 0; i < n; i ++) {
        for ( let j = 0; j < n; j ++) {
            if(arr[i][j] !== arr[j][i]) {
                answer = 0
            }        
    }
    }
    return answer;
}

// function solution(arr) {
//     return arr.every((r, i) => r.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
// }