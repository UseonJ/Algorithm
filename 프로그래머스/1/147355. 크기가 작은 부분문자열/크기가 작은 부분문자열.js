function solution(t, p) {
    let count = 0;
    let lenP = p.length;
    for(let i = 0; i <= t.length-lenP; i++) {
        if (Number(t[i]) < Number(p[0])) count++;
        else if (t[i]===p[0]) Number(t.slice(i,i+p.length)) <= Number(p)? count++ : null; 
    }
    return count;
}