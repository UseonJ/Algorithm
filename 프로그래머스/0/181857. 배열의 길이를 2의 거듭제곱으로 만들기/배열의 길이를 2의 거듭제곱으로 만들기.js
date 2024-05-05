function solution(arr) {
    var answer = [...arr];
    var power_of_2 = [1,2,4,8,16,32,64,128,256,512,1024];
    var length = arr.length;
    var target_length = power_of_2.find(el => el >= length); 
    
    var zeros_to_add = target_length - length;
    
    for (let i = 0; i < zeros_to_add; i++) {
        answer.push(0);
    }
    
    return answer;
}