function solution(arr, intervals) {
    return [...arr.slice(intervals[0][0],intervals[0][1]+1),...arr.slice(intervals[1][0],intervals[1][1]+1)];
}

// function solution(arr, intervals) {
//     const [[a,b],[c,d]] = intervals;

//     return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
// }