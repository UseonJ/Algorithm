function solution(my_string, alp) {
    return my_string.split('').map(a => {
        if(a === alp) return a.toUpperCase()
        else return a
    }).join('')
}