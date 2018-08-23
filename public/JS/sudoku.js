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
 
            if(Math.floor(Math.random() * 10) > 6){ 
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
            if(board[row][col] != easySodokuAnswer[row][col]){
                // User does not win
                return false
            }         
        }
    }
    // User wins
    prompt("Congraturation")
    console.log("YAY U WIN")
    return true;
}

let time = 0;
function timer(){
    return time++;
}

setInterval(() => {
    timer();
    easySudokuCheck();


   // console.log(time)
    
}, 10000 / 10)
