import { useContext, useEffect } from "react"
import { gameContext } from "../routes/Game"


export default function letterBlocks({ word, wordIndex }) {
    const { game } = useContext(gameContext);
    const revealedLetters = game.revealedLetters;
    
    return (
        <ul className="mystery-word__letter-group | flex" role="list" aria-live="assertive">
            {
                word.split("").map((letter, index) => {
                    const isIncludedLetter = revealedLetters.includes(letter);
                    return (
                        <li className={`mystery-word__letter ${isIncludedLetter && "mystery-word__letter--revealed"}`} key={`${word}-${index}`}>
                            <span aria-hidden="true"> {isIncludedLetter ? letter : "X"} </span>
                            <span className="visually-hidden">
                                {
                                isIncludedLetter ? 
                                `revealed letter: ${letter}` : 
                                "unrevealed letter"
                                }
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
}
