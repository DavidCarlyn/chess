import { useState } from 'react';

import './BoardView.css';

import Tile from './Tile';

function BoardView(props) {
    var view = [];
    props.state.data.forEach((row, i) => {
        var dark = i % 2 === 0;
        row.forEach((tile, j) => {
            var color = dark ? "grey" : "white";
            dark = !dark;

            view.push(<Tile piece={tile} color={color} row={i} col={j} />);
        });
    });
    
    return (
        <div className="BoardView">
            {view}
        </div>
    );
}

export default BoardView;
