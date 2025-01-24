function solution(food) {
    let resultArr = []
    food.slice(1).map(a => a%2===0? a/2 : Math.floor(a/2))
        .map((a,i) => {
             for (let j=0; j<a; j++) {
        resultArr.push(i+1)
        }
    })
    return resultArr.join('') + "0" + resultArr.reverse().join('') 
}