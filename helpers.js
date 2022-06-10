export function debugShow(text) {
    var p = document.createElement("p");
    p.innerText = text;
    document.body.appendChild(p);
}

export function parseFEN(fen) {
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