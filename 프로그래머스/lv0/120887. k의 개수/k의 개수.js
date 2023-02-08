function solution(i, j, k) {
    // i 2- j 102 k 6 차 100, 합 104 / 4 4
    // 22-102 6
    // i 8- j 102 k 6 차 94, 합 110 / -2 6
//     if(k>i){
//     let upper_interval = k-i
    
//     }
//     else if(k<i)
//     let lower_interval = (10-i) + k
    let counter = 0;
    for(iter=i; iter<=j; iter++){
       counter += iter.toString().split('').filter(x => x.includes(k)).length
    }
    return counter;
    
}