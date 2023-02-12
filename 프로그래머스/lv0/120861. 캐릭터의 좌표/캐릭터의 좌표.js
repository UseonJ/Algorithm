function solution(keyinput, board) {
    let cordinate = [0,0];
    let limitX = (board[0]-1)/2;
    let limitY = (board[1]-1)/2;
    keyinput.reduce((a,c) => {
        if(c==='up' && cordinate[1]<limitY){
            cordinate[1] = cordinate[1]+1
            return a = cordinate;
        }
        else if(c==='down' && cordinate[1]>-limitY){
            cordinate[1] = cordinate[1]-1
            return a = cordinate;
        }
        else if(c==='left' && cordinate[0]>-limitX){
            cordinate[0] = cordinate[0]-1
            return a = cordinate;
        }
        else if(c==='right' && cordinate[0]<limitX){
            cordinate[0] = cordinate[0]+1
            return a = cordinate;
        }
    },[0,0])
    return cordinate;
}