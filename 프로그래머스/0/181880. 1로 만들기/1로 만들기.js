function solution(num_list) {
    return num_list.reduce((a,c) => {
        let count = 0;
        while (c !== 1 ) {
         c % 2 === 0? c = c/2 : c = (c-1)/2
         count++
        }
        return a + count;
    }, 0);
}

// function solution(num_list) {
//     return num_list.map(v => v.toString(2).length - 1).reduce((a, c) => a + c);
// }