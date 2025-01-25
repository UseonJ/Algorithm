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