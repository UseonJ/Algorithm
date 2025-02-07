function solution(progresses, speeds) {
    const answer = [];
    const len = progresses.length;
    
    const days = progresses.map((progress,i) => Math.ceil((100 - progress)/speeds[i]))
    
    let count = 0;
    let hill = days[0]
    for (let i=0; i<len; i++) {
        if (days[i] <= hill) {
            count++
        } else {
            answer.push(count)
            count = 1
            hill = days[i]
        } 
    }
    answer.push(count)
    return answer
}