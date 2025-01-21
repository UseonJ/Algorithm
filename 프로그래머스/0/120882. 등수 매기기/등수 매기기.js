function solution(score) {
    let flatted = score.map(a => a = (a[0] + a[1])/2)
    let rank = []
    flatted.map(a => {
        let count = 0;
        count += flatted.filter(b => b>=a).length
        let same = flatted.filter(b => b===a).length
        if (same > 0) count -=  (same - 1)
        rank.push(count)
    })
    return rank
}