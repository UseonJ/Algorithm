function solution(ineq, eq, n, m) {
    const operator = eq === '!' ? `${ineq}` : `${ineq}${eq}`;
    const func = new Function('a', 'b', `return a ${operator} b;`);
    return func(n,m)? 1:0
}