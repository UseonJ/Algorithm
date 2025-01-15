function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false
    return s.match(/^\d+$/)? true : false
}

// 자릿수까지 포함가능 : var regex = /^\d{6}$|^\d{4}$/;