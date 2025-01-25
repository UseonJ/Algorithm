function solution(k, score) {
    let hallOfFame = []
    return score.map(a => {
        if (hallOfFame.length < k) {
            hallOfFame.push(a)
        } else {
            let minFame = Math.min(...hallOfFame)
            if ( minFame < a) {
                hallOfFame[hallOfFame.indexOf(minFame)] = a
            }
        }
        return Math.min(...hallOfFame)
    })
}