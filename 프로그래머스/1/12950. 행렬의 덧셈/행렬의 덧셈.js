function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((aa,ii) => aa = aa + arr2[i][ii]))
}