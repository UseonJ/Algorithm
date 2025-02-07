function solution(progresses, speeds) {
    const answer = [];
    const len = progresses.length;
    
    const days = progresses.map((progress,i) => Math.ceil((100 - progress)/speeds[i]))
    
    let count = 0;
    let hill = days[0]
    for (let i=0; i<len; i++) {
        if (days[i] <= hill) {
            count++
        } else {
            answer.push(count)
            count = 1
            hill = days[i]
        } 
    }
    answer.push(count)
    return answer
}

//function solution(progresses, speeds) {
//     var answer = [];

//     while(speeds.length > 0) {
//         // 개발
//         for(let i in speeds) {
//             if(progresses[i] < 100) {
//                 progresses[i] += speeds[i];
//             }
//         }

//         // 배포
//         let deploy_count = 0;
//         while(progresses[0] >= 100) {
//             progresses.shift();
//             speeds.shift();
//             deploy_count++;
//         }
//         if(deploy_count > 0) {
//             answer.push(deploy_count);
//         }
//     }

//     return answer;
// }