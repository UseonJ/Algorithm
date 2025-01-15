function solution(my_string, overwrite_string, s) {
    let myarr = my_string.split('')
    const overarr = overwrite_string.split('')
    myarr.splice(s,overarr.length,...overarr)
    return myarr.join('')
}

// string도 slice 가능
// return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);