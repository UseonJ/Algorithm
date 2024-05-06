function solution(arr, queries) {
    var answer = [...arr];
    queries.forEach(([a, b]) => {
        [answer[a], answer[b]] = [answer[b], answer[a]];
    });
    return answer;
}