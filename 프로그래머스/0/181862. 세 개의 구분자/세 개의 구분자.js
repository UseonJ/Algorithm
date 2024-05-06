function solution(myStr) {
    var answer = myStr.split(/[abc]/).filter(str => str !== "");

    return answer.length ? answer : ["EMPTY"];
}

// const solution=s=>s.match(/[^a-c]+/g)||['EMPTY']