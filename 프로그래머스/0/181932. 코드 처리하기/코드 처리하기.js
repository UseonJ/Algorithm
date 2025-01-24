function solution(code) {
    let mode = 0;
    let ret = ""
    code.split('').map((a,i) => {
        if (mode === 0) {
            if (a === '1') {
                mode = 1
            } else {
                if(i%2 === 0) ret += a
            }
        } else {
            if (a === '1') {
                mode = 0
            } else {
                if(i%2 !== 0) ret += a
            }
        }
    })
    return ret.length === 0? "EMPTY" : ret
}