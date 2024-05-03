function solution(arr, flag) {
    const answer = [];
    flag.map((a,i) => a? answer.push(...Array.from({length: arr[i] * 2}, () => arr[i])) : answer.splice(-arr[i], arr[i]));
    return answer;
}