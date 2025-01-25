function solution(balls, share) {
    if (balls - share === 1) return balls;
    if (balls === share) return 1;
    share = Math.min(share, balls - share);
    let answer = 1n;
    for (let i = 0; i < share; i++) {
        answer *= BigInt(balls - i);
        answer /= BigInt(i + 1);
    }
    return Number(answer);
}