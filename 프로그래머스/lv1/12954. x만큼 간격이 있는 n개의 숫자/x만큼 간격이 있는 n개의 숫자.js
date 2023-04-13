function solution(x, n) {
    let result = [x]
    for(let i=1; i<n; i++){
        result.push(x+x*i)
    }
    return result
}