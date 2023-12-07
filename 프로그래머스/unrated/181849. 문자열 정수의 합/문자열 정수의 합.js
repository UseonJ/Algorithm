function solution(num_str) {
    let answer = num_str.split("");
    answer = answer.map(Number)
    result = answer.reduce((a,c)=> a+c,0)
    return result;
}