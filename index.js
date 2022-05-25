
class BoardState {
    constructor(fen) {
        [this.data, this.turn, this.castling, this.enPassant, this.pawnCapMov, this.moveNum] = BoardState.parseFEN(fen);

    }

    static parseFEN(fen) {
        var [rows, turn, castling, enPassant, pawnCapMov, moveNum] = fen.split(" ");
        rows = rows.split("/")

        var data = [];
        rows.forEach(row => {
            var newRow = [];
            console.log(row)
            Array.from(String(row)).forEach(col => {
                var num = parseInt(col)
                if (isNaN(num)) {
                    newRow.push(col);
                } else {
                    for (var i = 0; i < num; ++i) {
                        newRow.push(" ");
                    }
                }
            });
            data.push(newRow)
        });
        return [data, turn, castling, enPassant, parseInt(pawnCapMov), parseInt(moveNum)];
    }

    getTurn() { return this.turn; }
    isBlackKingCastlingLegal() { return this.castling.includes('k'); }
    isBlackQueenCastlingLegal() { return this.castling.includes('q'); }
}


function main() {
    const TEST_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    var boardState = new BoardState(TEST_FEN);
}

document.body.onload = main();