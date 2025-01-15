function solution(my_string, overwrite_string, s) {
    let myarr = my_string.split('')
    const overarr = overwrite_string.split('')
    myarr.splice(s,overarr.length,...overarr)
    return myarr.join('')
}