import './Tile.css';
import WhiteKing from '../../resources/WhiteKing.png';
import WhiteQueen from '../../resources/WhiteQueen.png';
import WhiteBishop from '../../resources/WhiteBishop.png';
import WhiteKnight from '../../resources/WhiteKnight.png';
import WhiteRook from '../../resources/WhiteRook.png';
import WhitePawn from '../../resources/WhitePawn.png';
import BlackKing from '../../resources/BlackKing.png';
import BlackQueen from '../../resources/BlackQueen.png';
import BlackBishop from '../../resources/BlackBishop.png';
import BlackKnight from '../../resources/BlackKnight.png';
import BlackRook from '../../resources/BlackRook.png';
import BlackPawn from '../../resources/BlackPawn.png';

function Tile(props) {
    const style = {
        backgroundColor : props.color,
        height : '100px',
        width : '100px'
    };

    var img = "";
    switch (props.piece) {
        case "K":
            img = <img src={WhiteKing} height={100} />
            break;
        case "Q":
            img = <img src={WhiteQueen} height={100} />
            break;
        case "B":
            img = <img src={WhiteBishop} height={100} />
            break;
        case "N":
            img = <img src={WhiteKnight} height={100} />
            break;
        case "R":
            img = <img src={WhiteRook} height={100} />
            break;
        case "P":
            img = <img src={WhitePawn} height={100} />
            break;
        case "k":
            img = <img src={BlackKing} height={100} />
            break;
        case "q":
            img = <img src={BlackQueen} height={100} />
            break;
        case "b":
            img = <img src={BlackBishop} height={100} />
            break;
        case "n":
            img = <img src={BlackKnight} height={100} />
            break;
        case "r":
            img = <img src={BlackRook} height={100} />
            break;
        case "p":
            img = <img src={BlackPawn} height={100} />
            break;
        default:
            img = "";
    }

    return (
        <div style = {style} className="Tile">
            {img}
        </div>
    );
}

export default Tile;
