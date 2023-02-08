function solution(n) {
    let dupli = n
    let result = [];
    for(i=2; i<=dupli/2; i++){
        if(n%i===0) {
            result.push(i);
            for(j=i; n%j===0; j=j){            
            n = n/j;
            }
    }    
}
if(result.length === 0) result.push(dupli)
return result;
}