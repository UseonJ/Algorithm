function solution(arr) {
    let answer = [];
    for(a of arr){
        for(let i=0; i<a; i++){
            answer.push(a)
        }
    }
    return answer
}