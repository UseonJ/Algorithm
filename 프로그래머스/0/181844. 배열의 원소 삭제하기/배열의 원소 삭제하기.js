function solution(arr, delete_list) {
    delete_list.map(a => {
        let idx = arr.findIndex(el => el === a)
        idx === -1? console.log("") : arr.splice(idx,1)
    })
    return arr;
}