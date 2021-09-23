import React from "react";
import s from "./Square.module.css";

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className={s.square} onClick={onClick}>
       {value === 'X' && <>&#10005;</>}
       {value === 'O' && <>&#11096;</>}
    </button>
  );
};

export default Square;
