function solution(n) {
    let sum = 0;
    const sqrt = Math.sqrt(n);

    for(let divider = 1; divider <= sqrt; divider ++) {
        if(n % divider === 0) {
            divider !== Math.sqrt(n)? sum += divider + n/divider : sum += divider 
        }  
    }
    return sum;
}