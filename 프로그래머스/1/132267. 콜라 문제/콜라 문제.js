function solution(a, b, n) {
    let result = 0;
    while(n >= a) {
        let ex = Math.floor(n/a)
        result += ex*b
        n = ex*b + n%a
    }
    return result
}