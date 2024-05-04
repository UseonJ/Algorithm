function solution(intStrs, k, s, l) {
    return intStrs.reduce((a, c) => {
        const num = Number(c.slice(s, s + l));
        return num > k ? [...a, num] : a;
    }, []);
}