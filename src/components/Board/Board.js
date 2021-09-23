import React from 'react';
import Square from '../Square/Square';
import s from './Board.module.css';

const Board = ({ squares, onClick }) => {
    return (
        <div className={s.board}>
            <div className={s.boardWrapper}>
                {squares.map((square, index) => (
                    <Square key={index} value={square} onClick={() => onClick(index)}/>
                ))}
            </div>
        </div>
    );
}

export default Board;
