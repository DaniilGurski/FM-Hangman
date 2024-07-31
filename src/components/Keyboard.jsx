import { useContext, useRef } from "react";
import { gameContext } from "../routes/Game";

export default function Keyboard({ onLetterBlockClick }) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  const { game } = useContext(gameContext);
  const { disabledLetters } = game;

  return (
    <ul className="keyboard__letter-group | flex" role="list">
        {
        alphabet.map(letter => {
            const letterBlockRef = useRef();
            
            return (
              <li key={letter}>
                <button className="keyboard__letter-button" onClick={onLetterBlockClick} 
                disabled={disabledLetters.includes(letterBlockRef.current)} ref={letterBlockRef}> {letter} </button>
              </li>
            );
        })
        }
    </ul>
  )
}
