function solution(myString, pat) {
    let copiedString = myString;
    let count = 0;
    let index = copiedString.indexOf(pat);

    while (index !== -1) { 
        count++; 
        copiedString = copiedString.substring(index + 1); 
        index = copiedString.indexOf(pat); 
    }

    return count;
}

// function solution(myString, pat) {
//     let index = 0;
//     let count = 0;
  
//     while ((index = myString.indexOf(pat, index)) !== -1) {
//         count++;
//         index += 1;
//     }
  
//     return count;
// }