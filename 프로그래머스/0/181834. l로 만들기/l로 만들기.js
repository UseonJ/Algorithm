function solution(myString) {
    return myString.split("").map(a => a < "l"? "l" : a).join("");
}

// const solution = myString => myString.replace(/[a-k]/g,'l')