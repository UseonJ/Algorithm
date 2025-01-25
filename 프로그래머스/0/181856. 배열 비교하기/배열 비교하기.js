function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    if(len2 > len1) return -1
    else if(len2 === len1){
        let sum1 = arr1.reduce((a,c)=> a = a+c,0)
        let sum2 = arr2.reduce((a,c)=> a= a+c,0)
        if(sum1===sum2) return 0
        return sum2>sum1? -1 : 1
    } else return 1
}