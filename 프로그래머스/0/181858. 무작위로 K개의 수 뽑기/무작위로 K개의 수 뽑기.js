function solution(arr, k) {
    const numbers = Array.from(new Set(arr))
    return numbers.length >= k? numbers.slice(0,k) : [...numbers, ...new Array(k - numbers.length).fill(-1)] 
}