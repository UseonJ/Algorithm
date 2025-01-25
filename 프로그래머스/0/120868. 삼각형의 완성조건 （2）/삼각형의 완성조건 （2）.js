function solution(sides) {
    let sideSet = new Set()
    let diff = Math.abs(sides[0]-sides[1])
    let sum = Math.abs(sides[0]+sides[1])
    for(let i = diff+1; i<sum; i++) {
        
    }
    return sum - (diff+1)
}