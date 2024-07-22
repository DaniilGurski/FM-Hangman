import { useContext, useEffect } from "react"
import { gameContext } from "../routes/Game"


export default function letterBlocks({ word }) {
    const { revealedLetters } = useContext(gameContext);
 
    return (
        <ul className="mystery-word__letter-group | flex" role="list">
            {
                word.split("").map((index, letter) => {
                    return (
                        <li className="mystery-word__letter" key={`${letter}-${index}`}>
                            {revealedLetters.current.includes(letter) ? letter : "X"}
                        </li>
                    )
                })
            }
        </ul>
    )
}
