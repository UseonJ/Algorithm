function solution(my_strings, parts) {
    return my_strings.map((a,i) => a.slice(parts[i][0],parts[i][1]+1)).join("");
}

// function solution(my_strings, parts) {
//     return parts.map(([s, e], i) => {
//         return my_strings[i].slice(s, e + 1)
//     }).join('')
// }