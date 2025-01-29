function solution(arr1, arr2) {
    // 각 행렬의 size를 구한다
    // 각 행렬의 크기에 맞게 곱셈을 해서 결과값을 출력한다.
    const m = arr1.length;
    const n = arr1[0].length;
    const p = arr2[0].length;
    let result = [];
    for (let i=0; i<m; i++) {
        result.push(new Array(p).fill(0))
    }
    arr1.map((a,index) => {
        for (let i=0; i<n; i++) {
        for (let j=0; j<p; j++) {
            result[index][j] += arr1[index][i]*arr2[i][j]
        }
    }    
    })
    return result
}