function solution(id_list, report, k) {
    // const reportHistory = new Array(id_list.length).fill([]); 이렇게하면 fill 때문에 모든 배열이 동일한 참조를 가지게되는..ㄷㄷ
    const reportHistory = new Array(id_list.length).fill(null).map(() => []);
    const count = new Array(id_list.length).fill(0);
    report.forEach(record => {
        const [reporter, reported] = record.split(' ');
        const reporterIndex = id_list.indexOf(reporter);
        const reportedIndex = id_list.indexOf(reported); 
        if (!reportHistory[reporterIndex].includes(reportedIndex)) {
            reportHistory[reporterIndex].push(reportedIndex);
        count[reportedIndex]++;
    }
    })
    const filtered = count.reduce((a,c,i) => {
        if (c >= k) a.push(i)
        return a
    },[]);
    return reportHistory.map(a => {
      return a = a.filter(b => filtered.includes(b)).length;
    })
}

// 마지막이 불편해서 history를 만들 때, 이차원 배열을 생성해서 [[0,1],[1,2],[2]] 이런식으로 저장되게 한 뒤 해당 배열을 순회해야 인덱스를 그대로 활용하기 편할 듯 하다.