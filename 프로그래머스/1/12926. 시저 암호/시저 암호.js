function solution(s, n) {
    return s.split('').map(a => {
        let code = a.charCodeAt(0);
        if (a === ' ') return String.fromCharCode(code)
        if (65 <= code && code <= 90) {
            if (code + n > 90) return String.fromCharCode(code + n - 26) 
            return String.fromCharCode(code + n)
        } else if (97 <= code <= 122) {
            if (code + n > 122) return String.fromCharCode(code + n - 26)
            return String.fromCharCode(code + n)
        }
    }).join('')
}