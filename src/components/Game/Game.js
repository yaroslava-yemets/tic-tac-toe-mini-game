import React from 'react';
import Board from '../Board/Board';
import s from './Game.module.css';

const Game = () => {
    return (
        <div className={s.wrapper}>
            <Board />
        </div>
    );
}

export default Game;
