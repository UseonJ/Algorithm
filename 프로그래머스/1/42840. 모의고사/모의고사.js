function solution(answers) {
    // 각 수포자의 답 찍는 패턴을 분석한다.
    // 패턴에 따라 답이 몇 개인지 분석한다.
    // 비교하고 정답을 리턴한다.
    let pattern1 = [1, 2, 3, 4, 5];
    let pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let ans = answers.reduce((a,c,i) => {
        if (pattern1[i%5] === c) a[0]++
        if (pattern2[i%8] === c) a[1]++
        if (pattern3[i%10] === c) a[2]++
        return a
    },[0,0,0])
    return ans.reduce((a,c,i) => {
     if (Math.max(...ans) === c) {
       a += `${i+1}`  
     }
    return a
    },"").split('').map(a => Number(a)) 
    
}