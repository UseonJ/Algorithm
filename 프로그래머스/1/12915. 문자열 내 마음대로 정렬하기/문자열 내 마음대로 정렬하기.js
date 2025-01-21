function solution(strings, n) {
    return strings.sort((a,b) => {
        if (a[n].localeCompare(b[n]) < 0) return -1
        if (a[n] === b[n]) {
            return a.localeCompare(b) < 0? -1 : 1
        }
        return 1
    });
}