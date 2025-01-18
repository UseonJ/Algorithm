function solution(rank, attendance) {
    let answer = [];
    for (let i = 1; i<=rank.length; i++) {
        let index = rank.findIndex(a => a===i)
        if(attendance[index] === true) {
            answer.push(index)
        }
        if (answer.length === 3) break;
    }
    return answer[0]*10000 + answer[1]*100 + answer[2]*1
}