function solution(num_list) {
    let answer = [];
let len = num_list.length
    if (num_list[len-1] > num_list[len-2]){
        answer = [...num_list, num_list[len-1]-num_list[len-2]]
    } else {
        answer = [...num_list, num_list[len-1]*2]
    }
    return answer;
}