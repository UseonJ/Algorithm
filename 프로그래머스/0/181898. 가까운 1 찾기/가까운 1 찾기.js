function solution(arr, idx) {
    let id = arr.slice(idx).findIndex(a => a===1)
    return id === -1? -1 : id + idx;
}

// const solution=(a,i)=>a.indexOf(1,i);