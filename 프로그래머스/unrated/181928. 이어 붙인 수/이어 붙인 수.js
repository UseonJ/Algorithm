function solution(num_list) {
    let odd = ''
    let b = ''
    num_list.map(a => {
        if(a%2 === 0){
            b += a
        } else {
            odd += a
        }
    })
    return Number(odd) + Number(b)
}