function solution(arr, queries) {
    queries.map((el,i) => {
        for(let i = el[0]; i<=el[1]; i++) {
            arr[i]++
        }
    }
    )
    return arr;
}