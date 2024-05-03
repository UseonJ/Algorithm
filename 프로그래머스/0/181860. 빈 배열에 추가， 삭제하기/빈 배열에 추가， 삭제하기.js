function solution(arr, flag) {
    const answer = [];
    flag.map((a,i) => a? answer.push(...Array.from({length: arr[i] * 2}, () => arr[i])) : answer.splice(-arr[i], arr[i]));
    return answer;
}

// function solution(arr, flag) {
//   return arr.reduce(
//     (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
//     [],
//   );
// }