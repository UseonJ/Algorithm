//programmers lv0 pg5

// 삼각형 2

// function solution(sides) {
//     //중학교 수학인데..
//     //일단 sides에 있는 둘을 비교
//     // 같은 경우 , 한 쪽이 큰 경우 로직 생성
//     // 같은 경우 2,2 둘의 합4보다 작고,둘의 값 2보다 큰 3
//     let count = 0;
//     sides.sort((a,b)=> b-a)
//     if(sides[0]===sides[1]){
//         for (i=sides[1]+1; i<sides[0]*2;i++){
//             count ++
//         }
//             return count;
//         }
    
     
//     else{    
//         for (i=sides[0]-sides[1]+1; i<sides[0];i++){
//             count ++
//         }
//         for (i=sides[0]+1; i<sides[0]+sides[1];i++){
//             count ++
//         }
//     return count;
//     }
// }

// console.log(solution(	[11,11]))

// 4- last 

// function solution(spell, dic) {
//     if(
//     dic.filter(x => {
        
//         for(i=0; i<spell.length; i++){
//             if(x.includes(spell[i])){
//                if(x.indexOf(spell[i]) === x.lastIndexOf(spell[i])){
//                   console.log("pass") 
//                }
//                else{ return false} 
//         }
//         return true;
//         }
        
//     return false;
//     }).length === 1) {return 1}
//         else {return 2}
// }

// console.log(solution())

// 옹알이
//function solution(babbling) {
//   return babbling.map(x => {x = x.replace("aya","1").replace("ye","2").replace("woo","3").replace("ma","4")
//                        console.log(Number(x))
 //                      if(isNaN(Number(x))){
 //                       return 0;
//                       }
 //                      else{
 //                       return 1;
//                       }
//}).filter(x => x===1).length
//}

// function solution(babbling) {
//     return babbling.map(x => {x = x.replace("aya","1").replace("ye","2").replace("woo","3").replace("ma","4")
//      //                     console.log(typeof(Number(x)))
//                         if(typeof(Number(x))!=='number'){
//                          return 0;
//                         }
//                         else{
//                          return 1;
//                         }
//  }).filter(x => x===1).length
//  }
//  console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]))



// function solution(keyinput, board) {
//     let cordinate = [0,0];
//     let limit = (board-1)/2;
//     keyinput.reduce((a,c) => {
//         if(c==='up' && cordinate[1]<limit){
//             cordinate[1] = cordinate[1]+1
//             a = cordinate;
//             return a;
//         }
//         else if(c==='down' && cordinate[1]>-limit){
//             cordinate[1] = cordinate[1]-1
//             a = cordinate;
//             return a;
//         }
//         else if(c==='left' && cordinate[0]>-limit){
//             cordinate[0] = cordinate[0]-1
//             a = cordinate;
//             return a;
//         }
//         else if(c==='right' && cordinate[0]<limit){
//             cordinate[0] = cordinate[0]+1
//             a = cordinate;
//             return a;
//         }
//     },[0,0])
//     return cordinate;
// }

// console.log(solution(["left", "right", "up", "right", "right"],	[11, 11]))

function solution(id_pw, db) {
    let result="fail"
    for (i=0; i<db.length; i++){
      if(db[i][0]===id_pw[0]){
         if(db[i][1]===id_pw[1]){
            return result="login"
            
            } else{
           return result="wrong pw"
           
         } 
      } else {
          result="fail"  
    }
    }
    return result;
}

console.log(solution(["meosseugi", "1234"],[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))

