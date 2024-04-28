function solution(n) {
    const answer = [n];
    while (n !== 1) {
       if (n%2 === 0) {
           n = n/2;
           answer.push(n)
        } else {
           n = 3*n + 1
           answer.push(n)
       }
           
    }
    return answer;
}

// function solution(n, arr = []) {
//     arr.push(n)
//     if (n === 1) return arr
//     if (n % 2 === 0) return solution(n / 2, arr)
//     return solution(3 * n + 1, arr)
// }