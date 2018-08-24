document.addEventListener('DOMContentLoaded', startGame)

let intermediateSodokuAnswer = [
    [9,6,3,1,7,4,2,5,8],
    [1,7,8,3,2,5,6,4,9],
    [2,5,4,6,8,9,7,3,1],
    [8,2,1,4,3,7,5,9,6],
    [4,9,6,8,5,2,3,1,7],
    [7,3,5,9,6,1,8,2,4],
    [5,8,9,7,1,3,4,6,2],
    [3,1,7,2,4,6,9,8,5],
    [6,4,2,5,9,8,1,7,3]
]

var board = []




function startGame(){
    createBoard()
}

function createBoard () {
    board = []
    for(let r=0; r <9; r++){
    board.push([])
    for(let c=0; c<9; c++){
    board[r].push(0)
    }
    }
    displayBoard(board);
}



function displayBoard (board) {

 

    // Set board size
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
                 
            // Create a square
            var input = document.createElement("input");
            input.maxLength = "1"
 
            if(Math.floor(Math.random() * 10) > 4){ 
                board[row][col] = ""
                input.style.color = "red";

            } else {
                board[row][col] = easySodokuAnswer[row][col]
                input.value = easySodokuAnswer[row][col]
                input.readOnly = true;
            }

            addListener(input, row, col);

            // Add square to board 
            document.getElementById("board").appendChild(input);
            
        }
    }
}

function addListener(input, row, col){
    input.addEventListener("input", function(){
        board[row][col] = input.value
    });
}





function easySudokuCheck(){
    
    
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if(board[row][col] != intermediateSodokuAnswer[row][col]){
                // User does not win
                return false
            }         
        }
    }
    // User wins
    prompt("Congratulations! Please enter your name")
    console.log("YAY U WIN")
    return true;
}

let time = 0;
function timer(){
    time++
    let sw = document.getElementById("stopwatch")
    sw.innerHTML = time
}

setInterval(() => {
    timer();
    easySudokuCheck();
}, 1000)
