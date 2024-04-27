function solution(binomial) {
    const array = binomial.split(' ');
    return array[1] === '+'? Number(array[0]) + Number(array[2]) : array[1] === '-'? Number(array[0]) - Number(array[2]) : Number(array[0]) * Number(array[2]) 
}