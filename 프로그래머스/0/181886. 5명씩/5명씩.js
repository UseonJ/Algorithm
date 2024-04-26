function solution(names) {
    return names.filter((a,i)=> (i+1)%5 === 1? a : false)
}