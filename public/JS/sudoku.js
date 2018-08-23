document.addEventListener('DOMContentLoaded', startGame)

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
            var div = document.createElement("div");
            div.id = "r" + i + "c" + j;
            div.style.width = squareSize + "px";
            div.style.height = squareSize + "px";
            div.style.border = "solid";
            div.style.borderWidth = "1px"
            div.style.borderColor = "black"
            div.style.background = "white"

            // Add square to board
            document.getElementById("board").appendChild(div);
        }
    }
}
