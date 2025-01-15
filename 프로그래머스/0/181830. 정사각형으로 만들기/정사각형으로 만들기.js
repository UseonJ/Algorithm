function solution(arr) {
    let rownum = arr.length
    let colnum = arr[0].length
    return rownum > colnum? arr.map(a => a.concat(new Array(rownum - colnum).fill(0))) : arr.concat(new Array(colnum - rownum).fill(new Array(colnum).fill(0)))
}