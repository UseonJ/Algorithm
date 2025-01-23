function solution(s) {
    let S = new Set()
    return s.split('').map((a,i) => {
        if (S.has(a)) {
            for (let j = 1; i-j >= 0; j++) {
                if (s[i-j] === a) {
                    return j
                }
            }
        } else {
            S.add(a)
        }
        return -1
    })
}