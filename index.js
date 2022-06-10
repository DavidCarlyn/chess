import { BoardState } from "./BoardState.js";
import { debugShow } from "./helpers.js";


class BoardView {
    constructor(state, id) {
        this.id = id;
        this.state = state;
    }

    createBoard = () => {
        var gameBoard = document.createElement("DIV");
        gameBoard.id = "board-view";
        var data = this.state.data;
        for (var i = 0; i < 64; ++i) {
            var row = Math.floor(i / 8);
            var col = i % 8;
            var tile = document.createElement("DIV");
            var isBlack = true;
            if (Math.floor(i / 8) % 2 == 0) {
                isBlack = false;
            }
            if (i % 2) {
                isBlack = !isBlack;
            }
            var color = isBlack ? "grey" : "white";
            if (i != 0 && i % 8 == 0) {
                gameBoard.appendChild(document.createElement("br"));
            }
            tile.style.backgroundColor = color;
            tile.style.height = "100px";
            tile.style.width = "100px";
            tile.style.display = "inline-block";
            tile.style.textAlign = "center";
            tile.innerText = data[row][col];
            gameBoard.appendChild(tile);
        }
        document.getElementById(this.id).appendChild(gameBoard);
    }

    render = () => {
        document.getElementById(this.id).innerHTML = "" //TODO: need to have an error check here
        this.createBoard();
    }
}

function main() {
    //const TEST_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    const TEST_FEN = "r2q1rk1/pp2Pppp/8/2pb4/5B2/3BQ3/PPP2PPP/2KR3R b - - 0 14"
    var boardState = new BoardState(TEST_FEN);
    var boardView = new BoardView(boardState, "board");
    boardView.render();
    debugShow(TEST_FEN);
    
}

document.body.onload = main();