function solution(numbers) {
    let numberArr = []
    numbers.map((a,i) => {
        numbers.slice(i+1).map(aa => numberArr.push(a + aa))
    })
    return Array.from(new Set(numberArr.sort((a,b) => a-b)))
}