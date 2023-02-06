function solution(my_string) {
    let array = [...my_string]
    let num_S = '';
    return array.reduce((x,y,i) => {
        
        if(y.match(/[0-9]/g)){            
            num_S += y
            if(i === my_string.length-1) x += Number(num_S) 
            return x;
            }
        else if(Number(num_S)!==null){
            x += Number(num_S)
            num_S = ''
            return x;
            }
        else return x;
        },0)
}