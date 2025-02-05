function solution(s)
{
    const check = (a) => {
        let stack = []
        for (let i=0; i<a.length; i++) {
            if (stack.length === 0) {
                stack.push(a[i])
            } else {
                let last = stack[stack.length-1]
                if (last === a[i]) stack.pop()
                else stack.push(a[i])
            }
        }
        return stack.join('')
    }
    
    
    return check(s).length === 0? 1 : 0
}