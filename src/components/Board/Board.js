import React from 'react';
import Square from '../Square/Square';
import s from './Board.module.css';

const Board = () => {
    return (
        <div className={s.board}>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    );
}

export default Board;
