function solution(q, r, code) {
    let answer = '';
    if(q === 1 & r === 0) return code
    else {
        for(i = 0; i < code.length; i++){
            if (i%q===r) answer += code[i]
        }
        return answer
    }
}