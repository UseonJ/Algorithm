function solution(want, number, discount) {
    const n = Number(number.join(''))
    let count = 0;
    for (let i=0; i<discount.length-9; i++) {
        const arr = new Array(number.length).fill(0)
        discount.slice(i,i+10).map((a,index) => arr[want.indexOf(a)]++)
        if (Number(arr.join('')) === n) count++
    }
    return count
}