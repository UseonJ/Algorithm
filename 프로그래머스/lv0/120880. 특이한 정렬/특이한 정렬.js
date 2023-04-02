function solution(numlist, n) {
    return numlist.sort((a,b)=> {
        if(Math.abs(a-n)>Math.abs(b-n)) return 1;
        if(Math.abs(a-n)<Math.abs(b-n)) return -1;
        if(Math.abs(a-n)===Math.abs(b-n)){
            if(a>b) return -1;
            else return 1;
        }
    })
}