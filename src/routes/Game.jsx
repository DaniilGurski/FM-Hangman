
import { createContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCategoryNames, getGameData } from '../gameData';
import GameHeader from '../components/GameHeader';
import OverlayPortal from '../components/OverlayPortal';
import GameActionPanel from '../components/GameActionPanel';
import Keyboard from '../components/Keyboard';
import LetterBlocks from '../components/LetterBlocks';


export const gameContext = createContext();

export default function Game() {
  const TOTAL_HEALTH = 3;
  const currentCategoryIndex = useParams().category - 1;
  const currentCategoryName = getCategoryNames()[currentCategoryIndex]; 
  const currentCategoryData = getGameData()[currentCategoryName];

  const [mysteryWord, setMysteryWord] = useState("");
  const [currentHealth, setCurrentHealth] = useState(TOTAL_HEALTH);
  
  const actionPanelRef = useRef(null);
  const revealedLetters = useRef([]);


  function handlePanelOpening() {
    actionPanelRef.current.showModal();
  }


  function chooseNewWord() {
    const randomWordIndex = Math.floor(Math.random() * getGameData()[currentCategoryName].length);

    setMysteryWord(currentCategoryData[randomWordIndex].name);
  }


  useEffect(() => chooseNewWord(), []);
  useEffect(() => console.log(`new word to be guessed is '${mysteryWord}'`, [mysteryWord]))

  return (
    <div className="game-page | backdrop"> 
      <gameContext.Provider value={{ revealedLetters, currentHealth, TOTAL_HEALTH }}>
        <GameHeader 
        categoryName="placeholder" 
        onMenuClick={handlePanelOpening} />


        <section className="game-page__mystery-word-section"> 
          <ul className="mystery-word" role="list"> 
            {
              mysteryWord &&
              mysteryWord.split(" ").map(word => {
                return (
                  <li key={word}>
                    <LetterBlocks word={word} />
                  </li>
                )
              })
            }
          </ul>
        </section>

        <section className="game-page__keyboard-section"> 
          <Keyboard />
        </section>


        <OverlayPortal>
          <GameActionPanel ref={actionPanelRef}/>
        </OverlayPortal>
      </gameContext.Provider>
    </div>  
  )
}
