document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const cells = [];
    const restartBtn = document.getElementById('restart-btn');
    const help = document.getElementById('help');

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id', i);
        cells.push(cell);
        board.appendChild(cell);

        cell.addEventListener('click', () => handleCellClick(i));
    }

    restartBtn.addEventListener('click', restartGame);
    help.addEventListener('click', helpMenu);

    let currentPlayer = 'X';
    let playerXMoves = []
    let playerYMoves = []
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameWon = false;

    function handleCellClick(index) {
        if (!cells[index].classList.contains('disabled') && !gameWon) {
            gameBoard[index] = currentPlayer;

            cells[index].textContent = currentPlayer;
            
            if (currentPlayer == 'X') {
                playerXMoves.push(index)
                if (playerXMoves.length == 4) {
                    let oldPlay = playerXMoves.shift();
                    removeOldPlay(oldPlay);
                }
                if (playerXMoves.length >=3) {
                    allowPlay(playerXMoves[0])
                }
                console.log(playerXMoves)
            } else {
                playerYMoves.push(index)
                if (playerYMoves.length == 4) {
                    let oldPlay = playerYMoves.shift();
                    removeOldPlay(oldPlay);
                }
                if (playerYMoves.length >=3) {
                    allowPlay(playerYMoves[0])
                }
                console.log(playerYMoves)
            }

            if (checkWin()) {
                gameWon = true;
                highlightWinner();
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            if (!gameBoard.includes('') && !gameWon) {
                alert('Empate! O jogo acabou.');
            }

            cells[index].classList.add('disabled');
        }

        console.log(gameBoard)
        console.log(cells)
    }

    function checkWin() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]             // Diagonais
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return pattern;
            }
        }

        return null;
    }

    function highlightWinner() {
        const winPattern = checkWin();
        if (winPattern) {
            for (const index of winPattern) {
                cells[index].classList.add('winner');
            }
            alert(`Jogador ${currentPlayer === 'X' ? 'X' : 'O'} venceu!`);
        }
    }

    function allowPlay(index) {
        cells[index].classList.remove('disabled');
        cells[index].classList.add('oldest-play');
    }

    function removeOldPlay(index) {
        cells[index].classList.remove('oldest-play');
        cells[index].textContent = '';
        gameBoard[index] = '' 
    }

    function restartGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        playerXMoves = []
        playerYMoves = []
        gameWon = false;

        cells.forEach((cell) => {
            cell.textContent = '';
            cell.classList.remove('disabled', 'winner');
        });
    }

    function helpMenu() {
        alert("O Jogo da Velha 2 (mais velha ainda) se trata de uma evolução a partir do jogo original, com a proposta de nunca terminar em um empate.\nCada jogador só poderá ter 3 jogadas ativas por vez, no momento que a quarta for executada, a jogada mais velha será perdida.\nTambém é possível jogar na posição do peça que será perdida!")
    }
});