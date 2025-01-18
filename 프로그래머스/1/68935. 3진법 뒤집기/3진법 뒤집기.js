function solution(n) {
    let arr = []
    let answer = 0
    while (n > 0) {
        arr.push(n%3)
        n = Math.floor(n/3)
    }
    let reversed = arr.reverse()
    for (let i = 0; i < reversed.length; i++) {
        answer += Math.pow(3,i)*reversed[i] 
    }
    return answer
}