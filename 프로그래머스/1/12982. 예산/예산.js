function solution(d, budget) {
    let sorted = d.sort((a,b) => a-b)
    let count = 0
    for (a of sorted) {
        if (budget - a >= 0) {
            budget -= a
            count++
        } else {
            budget -= a
            break;
        }
    }
    return count;
}