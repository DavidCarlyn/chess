import { parseFEN } from "./helpers.js";

export class BoardState {
    constructor(fen) {
        [this.data, this.turn, this.castling, this.enPassant, this.pawnCapMov, this.moveNum] = parseFEN(fen);

    }

    getTurn = () => this.turn;
    isBlackKingCastlingLegal = () => this.castling.includes('k');
    isBlackQueenCastlingLegal = () => this.castling.includes('q');
    getEnPassantSquare = () => this.enPassant;
}