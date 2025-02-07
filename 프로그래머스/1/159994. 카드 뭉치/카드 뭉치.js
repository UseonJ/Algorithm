function solution(cards1, cards2, goal) {
    for (let el of goal) {
        if (el === cards1[0]) {
            cards1.shift()
        } else if (el === cards2[0]) {
            cards2.shift()
        } else {
            return "No"
        }
    }
    return "Yes"
}

// O(n) 으로 줄이기
// function solution(cards1, cards2, goal) {
//     let j = 0;
//     let k = 0;
//     for(let i=0;i<goal.length;i++){
//         if(goal[i] == cards1[j]) j++;
//         else if(goal[i] == cards2[k]) k++;
//         else return "No"
//     }
//     return "Yes";
// }