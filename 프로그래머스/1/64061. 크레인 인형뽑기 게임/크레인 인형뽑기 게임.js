function solution(board, moves) {
    let basket = [];
    let answer = 0;
    moves.map(a => {
        for (let i = 0; i < board.length; i++) {
            if (basket.length === 0) {
                if (board[i][a-1] !== 0) {
                    basket.push(board[i][a-1])
                    board[i][a-1] = 0
                    break;
                }
            } else {
                if (board[i][a-1] !== 0) {
                    let last = basket[basket.length-1]
                    if (last === board[i][a-1]) {
                        basket.pop()
                        board[i][a-1] = 0
                        answer += 2
                    } else {
                        basket.push(board[i][a-1])
                        board[i][a-1] = 0   
                    }
                    break;
                }                
            }
        }
    })
    return answer
}