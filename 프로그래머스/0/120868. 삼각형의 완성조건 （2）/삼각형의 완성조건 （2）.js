function solution(sides) {
    let diff = Math.abs(sides[0]-sides[1])
    let sum = Math.abs(sides[0]+sides[1])
    return Math.min(...sides)*2 - 1
    return sum - (diff+1)
    
    // 큰거 + 작은거 - ((큰거 - 작은거)+1)
    // 작은거 두 개 - 1
    // Math.min(...sides)*2 - 1
}