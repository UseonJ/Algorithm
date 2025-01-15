function solution(my_string, queries) {
    let strarr = my_string.split('')
    queries.map(a=> strarr = [...strarr.slice(0,a[0]), ...strarr.slice(a[0],a[1]+1).reverse(), ...strarr.slice(a[1]+1)])
    return strarr.join('')
}

// function solution(my_string, queries) {
//     const str = [...my_string];
//     queries.forEach(([s,e]) => {
//         while(s < e) {
//             [str[s], str[e]] = [str[e], str[s]];
//             s++; e--;
//         }
//     })
//     return str.join("");
// }