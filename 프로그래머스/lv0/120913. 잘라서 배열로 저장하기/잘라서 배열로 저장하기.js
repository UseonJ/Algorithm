function solution(my_str, n) {
    let answer = [];
    let iter = Math.ceil(my_str.length/n)
    for(i=0; i<iter; i++){
        answer.push(my_str.slice(0+i*n,(1+i)*n))
    }
    // if(my_str.length!==0){
    //     answer.push(my_str);
    // }
    return answer;
}