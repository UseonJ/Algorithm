function solution(n, m) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    const b = gcd(n, m);
    const c = lcm(n, m); 

    return [b, c];
}