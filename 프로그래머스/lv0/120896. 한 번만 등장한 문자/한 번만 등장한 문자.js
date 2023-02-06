function solution(s) {
    let array_once = []
    let multiple = []
    s.split('').map(x => array_once.includes(x)? multiple.includes(x)? console.log(x):multiple.push(x) : array_once.push(x) )
    return array_once.filter(x => !multiple.includes(x)).sort().join('')
}