function solution(my_string) {
    var answer = [];
    for (let i = 0; i<my_string.length; i++){
        answer.push(my_string.slice(i))
    }
    return answer.sort();
}

// function solution(my_string) {
//   return Array.from(my_string)
//     .map((_, i) => my_string.substring(i))
//     .sort();
// }

