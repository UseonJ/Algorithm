function solution(board, k) {
    let sum = 0;
    let rows = board.length;
    let cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i + j <= k) {
                sum += board[i][j];
            }
        }
    }
    return sum;
}

// function solution(board, k) {
//   return board.reduce(
//     (total, row, i) => total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
//     0,
//   );
// }