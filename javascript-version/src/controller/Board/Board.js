//import './App.css';
import { useState } from 'react';

import BoardState from '../../model/Board/BoardState';
import BoardView from '../../view/Board/BoardView';

function Board() {
    const [state, setState] = useState( new BoardState() );
    return (
        <div className="Board">
            <BoardView state={state}/>
        </div>
    );
}

export default Board;
