document.addEventListener('DOMContentLoaded', startGame)

let easySodokuAnswer = [
    [8,4,6,9,3,7,1,5,2],
    [3,1,9,6,2,5,8,4,7],
    [7,5,2,1,8,4,9,6,3],
    [2,8,5,7,1,3,6,9,4],
    [4,6,3,8,5,9,2,7,1],
    [9,7,1,2,4,6,3,8,5],
    [1,2,7,5,9,8,4,3,6],
    [6,3,8,4,7,1,5,2,9],
    [5,9,4,3,6,2,7,1,8]
]




function startGame(){
    createBoard()
}

function createBoard () {
    let size = 9;
    let board = []
    for(let r=0; r <size; r++){
      board.push([])
      for(let c=0; c<size; c++){
        board[r].push(0)
      }
    }
    displayBoard(board);
}

function displayBoard (board) {
    let squareSize = 48;

    // Set board size
    let boardWidth = ((squareSize * 9) + (9 * 2))  + "px";
    document.getElementById("board").style.width = boardWidth;

    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {

            // Create a square
            var input = document.createElement("input");
            input.id = "r" + i + "c" + j;
            input.style.width = squareSize + "px";
            input.style.height = squareSize + "px";
            input.style.border = "solid";
            input.style.borderWidth = "1px"
            input.style.borderColor = "black"
            input.style.background = "white"
            input.maxLength = "1"

            // Add square to board
            document.getElementById("board").appendChild(input);
        }
    }
}

function easySudoku(){
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            
        }
    }
}
