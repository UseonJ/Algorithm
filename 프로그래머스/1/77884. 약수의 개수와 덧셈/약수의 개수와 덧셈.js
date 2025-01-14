function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        let divisorCount = 0;

        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                divisorCount++; 
                if (j !== i / j) {
                    divisorCount++;
                }
            }
        }
        divisorCount%2===0? answer += i : answer -= i
    }
    return answer;
}
