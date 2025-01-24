function solution(s) {
    const a = {"zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"}
    
    for (let key in a) {
        s = s.replaceAll(key,a[key])
        if (/^\d+$/.test(s)) break;
    }
    return Number(s)
}