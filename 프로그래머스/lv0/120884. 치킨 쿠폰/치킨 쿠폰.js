function solution(chicken) {
    //쿠폰/10 만큼 결과에 추가하고 
    //남은 쿠폰의 수의 합이 9이하일때 그대로 리턴하면서 종료
    let coupon = chicken
    let result = 0;
    while(coupon >= 10){
        result += Math.floor(coupon/10)
        coupon = Math.floor(coupon/10) + coupon%10
    }
    return result;
}