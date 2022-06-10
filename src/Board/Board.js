import { useState } from 'react';

import './Board.css';

import Tile from './Tile';

function getStartState() {
    return {
        a8 : "r", b8 : "n", c8 : "b", d8 : "q", e8 : "k", f8 : "b", g8 : "n", h8 : "r",
        a7 : "p", b7 : "p", c7 : "p", d7 : "p", e7 : "p", f7 : "p", g7 : "p", h7 : "p",
        a6 : "", b6 : "", c6 : "", d6 : "", e6 : "", f6 : "", g6 : "", h6 : "",
        a5 : "", b5 : "", c5 : "", d5 : "", e5 : "", f5 : "", g5 : "", h5 : "",
        a4 : "", b4 : "", c4 : "", d4 : "", e4 : "", f4 : "", g4 : "", h4 : "",
        a3 : "", b3 : "", c3 : "", d3 : "", e3 : "", f3 : "", g3 : "", h3 : "",
        a2 : "P", b2 : "P", c2 : "P", d2 : "P", e2 : "P", f2 : "P", g2 : "P", h2 : "P",
        a1 : "R", b1 : "N", c1 : "B", d1 : "Q", e1 : "K", f1 : "B", g1 : "N", h1 : "R",
        lightColor : "lightgrey",
        darkColor : "darkgrey"
    }
}

function Board() {
    const [state, setState] = useState(getStartState());
    const [dragState, setDragState] = useState({
        position : "",
    })

    const mouseEvents = {
        onClick : (e, tile) => {
            setDragState({
                ...dragState,
                position : state[tile]
            });
            setState({
                ...state,
                [tile] : ""
            });
        },
        onRelease : (e, tile) => {
            setState({
                ...state,
                [tile] : dragState.position
            });
            setDragState({
                ...dragState,
                position : ""
            });
        }
    }

    return (
        <div className="Board">
            <Tile mouseEvents={mouseEvents} piece={state.a8} name="a8" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.b8} name="b8" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.c8} name="c8" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.d8} name="d8" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.e8} name="e8" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.f8} name="f8" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.g8} name="g8" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.h8} name="h8" color={state.darkColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a7} name="a7" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.b7} name="b7" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.c7} name="c7" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.d7} name="d7" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.e7} name="e7" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.f7} name="f7" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.g7} name="g7" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.h7} name="h7" color={state.lightColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a6} name="a6" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.b6} name="b6" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.c6} name="c6" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.d6} name="d6" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.e6} name="e6" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.f6} name="f6" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.g6} name="g6" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.h6} name="h6" color={state.darkColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a5} name="a5" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.b5} name="b5" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.c5} name="c5" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.d5} name="d5" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.e5} name="e5" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.f5} name="f5" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.g5} name="g5" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.h5} name="h5" color={state.lightColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a4} name="a4" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.b4} name="b4" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.c4} name="c4" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.d4} name="d4" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.e4} name="e4" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.f4} name="f4" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.g4} name="g4" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.h4} name="h4" color={state.darkColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a3} name="a3" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.b3} name="b3" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.c3} name="c3" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.d3} name="d3" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.e3} name="e3" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.f3} name="f3" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.g3} name="g3" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.h3} name="h3" color={state.lightColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a2} name="a2" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.b2} name="b2" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.c2} name="c2" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.d2} name="d2" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.e2} name="e2" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.f2} name="f2" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.g2} name="g2" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.h2} name="h2" color={state.darkColor} />
            <Tile mouseEvents={mouseEvents} piece={state.a1} name="a1" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.b1} name="b1" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.c1} name="c1" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.d1} name="d1" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.e1} name="e1" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.f1} name="f1" color={state.lightColor} /><Tile mouseEvents={mouseEvents} piece={state.g1} name="g1" color={state.darkColor} /><Tile mouseEvents={mouseEvents} piece={state.h1} name="h1" color={state.lightColor} />
        </div>
    );
}

export default Board;
