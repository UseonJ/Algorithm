function solution(arr, queries) {
    return queries.map(query => {
        const [s, e, k] = query
        const filtered = arr.slice(s, e + 1).filter(x => x > k)
        return filtered.length > 0 ? Math.min(...filtered) : -1
    });
}