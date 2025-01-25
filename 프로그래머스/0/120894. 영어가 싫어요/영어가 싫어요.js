function solution(numbers) {
    let filter = {
        "zero" : "0", 
        "one" : "1", 
        "two" : "2", 
        "three" : "3", 
        "four" : "4",
        "five" : "5", 
        "six" : "6", 
        "seven" : "7", 
        "eight" : "8", 
        "nine" : "9"
    }
    Object.keys(filter).forEach(a => numbers = numbers.replaceAll(a, filter[a]));
    return +numbers;
}

// const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
//         return obj[v];
//     });

// 그리고 split이용하는 기술도 있음