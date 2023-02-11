function solution(dots) {
       
    let a1 = (dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0])
    let a2 = (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])
    
    let a3 = (dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0])
    let a4 = (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])
    
    let a5 = (dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0])
    let a6 = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0])
    
    if(a1===a2||a3===a4||a5===a6) return 1
    else return 0
        // }
    // } 
}