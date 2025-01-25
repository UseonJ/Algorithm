function solution(spell, dic) {
    for (let word of dic) {
        if(spell.length === word.length) {
            for(let i=0; i<word.length; i++) {
                if (word.includes(spell[i])) {
                    if (i === word.length-1) return 1
                } else break;
            }
        } 
    }
    return 2
}
// function solution(p, d) {
//     return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
// }