const solution = (num_list, n) => {
    let len = num_list.length;
    let answer = [];
    for(let i=0; i<len; i+=n){
        answer.push(num_list[i])
    }
    return answer
}