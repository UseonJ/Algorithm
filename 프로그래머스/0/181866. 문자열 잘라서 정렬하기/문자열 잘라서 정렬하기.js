function solution(myString) {
    return myString.split("x").filter(a => a).sort()
}

// const solution=s=>s.match(/[^x]+/g).sort()