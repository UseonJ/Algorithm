function solution(array) {
    let result = 0;
     for (let i in array){
         let str = array[i].toString() 
       if(str.includes('7')){
           result += str.split('').filter(x => x==='7').length
       }  
     }
     return result;
}