import { useState } from 'react';

import './Tile.css';
import WhiteKing from '../resources/WhiteKing.png';
import WhiteQueen from '../resources/WhiteQueen.png';
import WhiteBishop from '../resources/WhiteBishop.png';
import WhiteKnight from '../resources/WhiteKnight.png';
import WhiteRook from '../resources/WhiteRook.png';
import WhitePawn from '../resources/WhitePawn.png';
import BlackKing from '../resources/BlackKing.png';
import BlackQueen from '../resources/BlackQueen.png';
import BlackBishop from '../resources/BlackBishop.png';
import BlackKnight from '../resources/BlackKnight.png';
import BlackRook from '../resources/BlackRook.png';
import BlackPawn from '../resources/BlackPawn.png';

function Tile(props) {
    const style = {
        backgroundColor : props.color
    };

    const onClick = (e) => {
        props.mouseEvents.onClick(e, props.name);
    }
    const onRelease = (e) => {
        props.mouseEvents.onRelease (e, props.name);
    }

    var img = "";
    switch (props.piece) {
        case "K":
            img = <img src={WhiteKing} width={100} height={100} />
            break;
        case "Q":
            img = <img src={WhiteQueen} width={100} height={100} />
            break;
        case "B":
            img = <img src={WhiteBishop} width={100} height={100} />
            break;
        case "N":
            img = <img src={WhiteKnight} width={100} height={100} />
            break;
        case "R":
            img = <img src={WhiteRook} width={100} height={100} />
            break;
        case "P":
            img = <img src={WhitePawn} width={100} height={100} />
            break;
        case "k":
            img = <img src={BlackKing} width={100} height={100} />
            break;
        case "q":
            img = <img src={BlackQueen} width={100} height={100} />
            break;
        case "b":
            img = <img src={BlackBishop} width={100} height={100} />
            break;
        case "n":
            img = <img src={BlackKnight} width={100} height={100} />
            break;
        case "r":
            img = <img src={BlackRook} width={100} height={100} />
            break;
        case "p":
            img = <img src={BlackPawn} width={100} height={100} />
            break;
        default:
            img = "";
    }

    return (
        <div style = {style} className="Tile" onMouseDown={ (e) => onClick(e) } onMouseUp={ (e) => onRelease(e) }>
            {img}
        </div>
    );
}

export default Tile;
