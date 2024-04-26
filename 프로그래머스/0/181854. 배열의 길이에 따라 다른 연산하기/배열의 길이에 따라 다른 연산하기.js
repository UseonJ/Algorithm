function solution(arr, n) {
    var answer = arr.slice();
    if (arr.length % 2 == 0) {
        for(let i=0; 2*i < arr.length; i++){
            answer[2*i+1] += n;
        }
    } else {
        for(let i=0; 2*i+1 <= arr.length; i++){
            answer[2*i] += n;
        }
    }
    return answer;
}