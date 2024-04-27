function solution(numLog) {
    const op = ["w","s","d","a"]
    const answer = []
    for (let i = 1; i<numLog.length; i++) {
        const diff = numLog[i] - numLog[i-1]
        diff === 1? answer.push(op[0]) : diff === -1? answer.push(op[1]) : diff === 10? answer.push(op[2]) : answer.push(op[3])  
    }
    return answer.join("");
}

// function solution(numLog) {
//     const convert = {
//         '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//     };

//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('')
// }