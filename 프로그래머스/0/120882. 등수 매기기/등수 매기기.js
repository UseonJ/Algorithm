function solution(score) {
    let flatted = score.map(a => a = (a[0] + a[1])/2)
    let rank = []
    flatted.map(a => {
        let count = 0;
        count += flatted.filter(b => b>=a).length
        let same = flatted.filter(b => b===a).length
        if (same > 0) count -=  (same - 1)
        rank.push(count)
    })
    return rank
}

//  좀 더 간결한 방식
//  function solution(score) {
//   return score.map((el) => {
//     return (
//       score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
//     );
//   });
// }