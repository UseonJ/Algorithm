function solution(s) {
    let array = s.split(' ')
    let result = 0
    
    return array.reduce((a,c,i) => {
        if (array[i+1]==="Z"){
            return a
        }
        else if(c==="Z"){
            return a
        }
        else{
            return a + Number(c);
        }
    },result)
    
}