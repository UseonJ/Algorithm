function solution(number) {
    var answer = 0;
    for(let i = 0; i < number.length-2; i++) {
        for(let j = i+1; j < number.length-1; j++){
            const len = number.slice(j+1).filter(a => a === -(number[i] + number[j])).length
            if (len > 0) answer += len    
        }
    }
    return answer;
}

// 재귀함수, DFS 체크