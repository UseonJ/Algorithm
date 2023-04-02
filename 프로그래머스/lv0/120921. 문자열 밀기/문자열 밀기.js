function solution(A, B) {
    if(A===B) return 0
    let Ar = A;
    const Alen = A.length
    for(i=0; i<Alen; i++){
        Ar = Ar.slice(Alen-1).concat(Ar.slice(0,Alen-1))
        if(B === Ar) return i+1;
    }
    return -1;
}