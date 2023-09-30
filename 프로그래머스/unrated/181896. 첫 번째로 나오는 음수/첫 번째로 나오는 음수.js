function solution(num_list) {
    for (a of num_list) {
        if(a < 0) {
            return num_list.indexOf(a)
            break;
        }
    }
    return -1;
}