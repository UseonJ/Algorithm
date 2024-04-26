function solution(strArr) {
    return strArr.map((a,i) => {
        return i%2 === 0? a = a.toLowerCase() : a = a.toUpperCase();
    })
}