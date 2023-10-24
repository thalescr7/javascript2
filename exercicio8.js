var board = document.getElementByld('board');
var menssage = document.getElementByld('menssage');

let JogadorAtual = 'X';
let cell = Array(9).fill('');   
let gameOver = false;

for(let = 0, i < 9, i++){
    let cell = document.createElement('div');
    cell.classList('div');
    cell.addEventlistener('click', ()=> handleCellClick(i));
    board.appendChild(cell);

}

function handleCellClick(index) {
    
}