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

// 처음에 생각한 단계마다 업데이트
// function solution(s) {
//     const hash={};

//     return [...s].map((v,i)=>{
//         let result = hash[v] !== undefined ? i - hash[v] : -1;
//         hash[v] = i;
//         return result;
//     });
// }