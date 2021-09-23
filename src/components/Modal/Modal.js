import React, { useState } from 'react';
import s from './Modal.module.css';

function Modal ({onClose, getNames}) {
  const [playerName1, setPlayerName1] = useState('');
  const [playerName2, setPlayerName2] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(playerName1.trim() === '' || playerName2.trim() === '') {
        return alert('Sorry, but you have to enter the name for players');
    }
    getNames(playerName1, playerName2);
    onClose();
  };

  const getInputValue = (e) => {
    if(e.target.name === 'playerName1') {
        setPlayerName1(e.target.value)
    } else if(e.target.name === 'playerName2') {
        setPlayerName2(e.target.value)
    }
  };

  return (
    <div className={s.Overlay}>
        <div className={s.Modal}>
            <form className={s.form} onSubmit={onFormSubmit}>
                <label l className={s.label}>
                    Please, enter the name
                    <input 
                        onChange={getInputValue}
                        className={s.input}
                        placeholder="Player 1"
                        type="text"
                        name="playerName1"
                        value={playerName1}
                    />
                </label>
                <label className={s.label}>
                    Please, enter the name
                    <input 
                        onChange={getInputValue}
                        className={s.input}
                        placeholder="Player 2"
                        type="text" 
                        name="playerName2"
                        value={playerName2}
                    />
                </label>
                <button 
                    type="submit" 
                    className={s.button}
                >
                        Start game
                </button>
            </form>
        </div>
    </div>
  );
};

export default Modal;
