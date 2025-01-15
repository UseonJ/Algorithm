function solution(a, b) {
    const alen = a.length
    const blen = b.length
    let longerlen = Math.max(alen, blen);
    let reserve = 0;
    let answer = '';
    
    for (let i=0; i<longerlen; i++) {
        let digitA = a[alen-i-1]? Number(a[alen-i-1]) : 0
        let digitB = b[blen-i-1]? Number(b[blen-i-1]) : 0
        let sum = digitA+digitB+reserve
        sum>=10? reserve = 1 : reserve = 0
        answer = sum%10 + answer
        }
    
    if (reserve === 1) answer = 1 + answer;
    
    return `${answer}`
}