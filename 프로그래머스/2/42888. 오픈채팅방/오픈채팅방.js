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