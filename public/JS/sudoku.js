document.addEventListener('DOMContentLoaded', startGame)

let easySodokuAnswer = [[
    [8,4,6,9,3,7,1,5,2],
    [3,1,9,6,2,5,8,4,7],
    [7,5,2,1,8,4,9,6,3],
    [2,8,5,7,1,3,6,9,4],
    [4,6,3,8,5,9,2,7,1],
    [9,7,1,2,4,6,3,8,5],
    [1,2,7,5,9,8,4,3,6],
    [6,3,8,4,7,1,5,2,9],
    [5,9,4,3,6,2,7,1,8]
],
[
    [9,4,2,7,6,1,8,5,3],
    [3,8,7,5,9,2,6,4,1],
    [6,1,5,8,3,4,2,9,7],
    [2,6,3,1,4,7,5,8,9],
    [8,7,1,9,2,5,3,6,4],
    [4,5,9,3,8,6,1,7,2],
    [7,9,6,2,1,8,4,3,5],
    [5,2,8,4,7,3,9,1,6],
    [1,3,4,6,5,9,7,2,8]
],
[
    [9,1,4,5,7,3,8,2,6],
    [5,3,2,4,8,6,1,7,9],
    [9,1,3,4,2,5,8,6,7],
    [7,1,8,2,9,3,4,5,6],
    [9,7,1,3,2,6,5,8,4],
    [5,3,1,7,4,2,9,8,6],
    [1,8,6,5,3,9,2,4,7],
    [7,1,5,9,2,4,6,8,3],
    [1,3,7,5,8,4,2,9,6]
],
[
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9]
],
[
    [5,7,2,3,9,1,4,6,8],
    [4,9,8,5,7,6,2,1,3],
    [1,6,3,8,2,4,7,5,9],
    [9,4,7,6,8,3,1,2,5],
    [3,8,1,2,5,7,9,4,6],
    [6,2,5,1,4,9,3,8,7],
    [8,3,6,7,1,2,5,9,4],
    [7,1,4,9,6,5,8,3,2],
    [2,5,9,4,3,8,6,7,1]
]]

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
    console.log("YAY U WIN")
    return true;
}

let time = 0;
function timer(){
    time++;
   let sw = document.getElementById('stopwatch')
   sw.innerHTML = time
}

setInterval(() => {
    timer();
    easySudokuCheck();


   // console.log(time)
    
}, 1000)
