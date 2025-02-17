function solution(record) {
    const answer = []
    const recmap = new Map()
    record.map(rec => {
        const recarr = rec.split(" ")
        if (recarr[0] !== "Leave") {
            recmap[recarr[1]] = recarr[2]
        }
    })
    record.map(rec => {
        const recarr = rec.split(" ")
        if (recarr[0] === "Enter") {
            answer.push(`${recmap[recarr[1]]}님이 들어왔습니다.`)
        } else if (recarr[0] === "Leave") {
            answer.push(`${recmap[recarr[1]]}님이 나갔습니다.`)
        }
    })
    return answer;
}

// 내 힘으로 매핑 깔끔하게 해서 기분좋다. 더 효율적일 수도 있는 다른 풀이들 검토.
// function solution(record) {
//     const userInfo = {};
//     const action = [];
//     const stateMapping = {
//         'Enter': '님이 들어왔습니다.',
//         'Leave': '님이 나갔습니다.'
//     }

//     record.forEach((v) => {
//         const [state, id, nick] = v.split(' ');

//         if(state !== "Change") {
//             action.push([state, id]);
//         }

//         if(nick) {
//             userInfo[id] = nick;
//         }
//     })

//     return action.map(([state, uid]) => {
//         return `${userInfo[uid]}${stateMapping[state]}`;    
//     })
// }