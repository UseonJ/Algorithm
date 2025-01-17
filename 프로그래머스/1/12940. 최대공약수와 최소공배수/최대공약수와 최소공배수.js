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

//  코딩 접어..?
//  function gcdlcm(a, b) {
//     var r;
//     for(var ab= a*b;r = a % b;a = b, b = r){}
//     return [b, ab/b];
// }