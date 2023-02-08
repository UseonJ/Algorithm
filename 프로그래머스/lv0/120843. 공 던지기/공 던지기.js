function solution(numbers, k) {
let thro = 2*k-1;
    for(i=0; thro > numbers.length; i++){
        thro -= numbers.length;
    }
return numbers[thro-1]; // index 0부터니까 1조정
}