function solution(start_num, end_num) {
    const arr = []
    while (start_num >= end_num) {
        arr.push(start_num)
        start_num--
    }
    return arr
}