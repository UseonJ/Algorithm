function solution(picture, k) {
    return picture.map(a => a.split('').map(aa => aa.repeat(k)).join('')).flatMap(a => new Array(k).fill(a))
}