function solution(arr, queries) {
    queries.map((el,i) => {
        for(let i = el[0]; i<=el[1]; i++) {
            arr[i]++
        }
    }
    )
    return arr;
}

// function solution(arr, queries) {
//     queries.forEach(([s, e]) => {
//         while (s <= e) arr[s++]++;
//     });
//     return arr;
// }

// function solution(arr, queries) {
//     for (let [s,e] of queries) for (let i=s; i<= e; i++) arr[i]++
//     return arr
// }