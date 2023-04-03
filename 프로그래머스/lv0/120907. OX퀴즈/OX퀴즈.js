function solution(quiz) {

    let result = []    

    quiz.map(x => {
        let newx = x.split(' ')        
        const X = Number(newx[0]);        
        const Y = Number(newx[2]);
        const Z = Number(newx[4]);
         
        if(newx[1]==="+") {
            X + Y === Z? result.push("O") : result.push("X")
        } else {
             X - Y === Z? result.push("O") : result.push("X")
        }         
         // newx = ''
     })

     return result;
 
 }