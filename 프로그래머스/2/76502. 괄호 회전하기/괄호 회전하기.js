function solution(s) {
    let open = "([{";
    let close = ")]}";
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let stack = [];
        let isValid = true;

        for (let j = 0; j < s.length; j++) {
            let current = s[(i + j) % s.length];

            if (open.includes(current)) {
                stack.push(current); 
            } else {
                if (stack.length === 0 || stack.pop() !== open[close.indexOf(current)]) {
                    isValid = false; 
                    break;
                }
            }
        }

        if (isValid && stack.length === 0) {
            answer++;
        }
    }
    return answer;
}