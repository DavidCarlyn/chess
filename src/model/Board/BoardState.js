class BoardState {
    constructor() {
        this.data = [];
        this.init();
    }

    init() {
        // NOTE: this will look flipped
        this.data = [
            ['R','N','B','Q','K','B','N','R'],
            ['P','P','P','P','P','P','P','P'],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['','','','','','','',''],
            ['p','p','p','p','p','p','p','p'],
            ['r','n','b','q','k','b','n','r'],
        ]
    }

    setPosition(piece, pos_row, pos_col) {
        this.data[pos_row][pos_col] = piece;
    }

    setData(data) {
        this.data = data;
    }

    copy() {
        var boardCopy = new BoardState();
        boardCopy.setData(this.data);
        return boardCopy;
    }
}

export default BoardState;