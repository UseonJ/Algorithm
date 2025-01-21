function solution(a, b) {
    // a,b 의 공약수가 없도록 최대공약수로 둘 다 나눔
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    b = b/gcd(a,b)
    // 분모 b가 2와 5만으로 이루어지는지 판별
    const divisors = [];
    
    for (let i = 1; i <= Math.sqrt(b); i++) {
        if (b % i === 0) {
            divisors.push(i);
            if (i !== b / i) {
                divisors.push(b / i);
            }
        }
    }
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }
    
    return b === 1 ? 1 : 2;
}