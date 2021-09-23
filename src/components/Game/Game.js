import { useState, useEffect } from 'react';
import Board from '../Board/Board';
import Modal from '../Modal';
import { calculateWinner } from '../../utilities/winnerCounter';
import s from './Game.module.css';


const Game = () => {
    const [showModal, setShowModal] = useState(true);
    const [player1, setPlayer1] = useState('Player1');
    const [player2, setPlayer2] = useState('Player2');
    const [scorePlayer1, setsScorePlayer1] = useState(0);
    const [scorePlayer2, setsScorePlayer2] = useState(0);
    const [newGame, setNewGame] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    useEffect(() => {
        openModal();
    }, []);

    useEffect(() => {
        if(winner) {
            setNewGame(true);
            if(winner === 'X') {
                setsScorePlayer1(state => state + 1);
            } else if(winner === 'O') {
                setsScorePlayer2(state => state + 1);
            } 
        };
        if(!winner) {
            if(board.every(board => board !== null)){
                alert('Sorry, but there are not more steps and no one is winner');
                setBoard(Array(9).fill(null));
            };
        };
        
    }, [winner, player1, player2, board])

    const openModal = () => {
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
    };

    const getPlayersNames = (name1, name2) => {
        setPlayer1(name1);
        setPlayer2(name2);
    };

    const handleClick = (index) => {
        const boardCopy = [...board];

        if(winner || board[index]) return;

        boardCopy[index] = xIsNext ? 'X' : 'O';

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };

    const hadleNewGame = () => {
        setBoard(Array(9).fill(null));
        setShowModal(true);
        setsScorePlayer1(0);
        setsScorePlayer1(0);
        setNewGame(false);
    };

    const hadleNewBattle = () => {
        setBoard(Array(9).fill(null));
        setNewGame(false);
    };

    return (
        <>
            {showModal && <Modal onClose={closeModal} getNames={getPlayersNames}/>}
            <div className={s.wrapper}>
                <Board squares={board} onClick={handleClick}/>
                <div className={s.gameInform}>
                    <p>Score</p>
                    <p>{player1}: {scorePlayer1}</p>
                    <p>{player2}: {scorePlayer2}</p>
                    {newGame && 
                        <>
                            <button type="button" onClick={hadleNewGame} className={s.button}>
                                Start New Game
                            </button>
                            <button type="button" onClick={hadleNewBattle} className={s.button}>
                                Start New Battle
                            </button>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Game;
