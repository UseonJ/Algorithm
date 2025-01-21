function solution(sizes) {
    sizes.forEach((a) => {
        if(a[1] > a[0]) [a[0],a[1]] = [a[1],a[0]]
    })
    return Math.max(...sizes.map(a => a[0]))*Math.max(...sizes.map(a => a[1]))
}