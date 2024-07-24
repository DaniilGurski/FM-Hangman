
import { createContext, useEffect, useRef, useState, useMemo } from 'react'
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
  const [revealedLetters, setRevealedLetters] = useState([]);
  
  const actionPanelRef = useRef(null);


  function handlePanelOpening() {
    actionPanelRef.current.showModal();
  }


  function handleLetterBlockClick(e) {
    const selectedLetter = e.target.innerText;

    if (mysteryWord.includes(selectedLetter)) {
      setRevealedLetters([...revealedLetters, selectedLetter]);
      return
    }

    setCurrentHealth(currentHealth => currentHealth - 1);
  }


  function chooseNewWord() {
    const randomWordIndex = Math.floor(Math.random() * getGameData()[currentCategoryName].length);

    setMysteryWord(currentCategoryData[randomWordIndex].name.toLowerCase());
  }


  useEffect(() => chooseNewWord(), []);
  useEffect(() => console.log(`new word to be guessed is '${mysteryWord}'`, [mysteryWord]))
  useEffect(() => {
    if (!currentHealth) {
      console.log("game end")
    }
    console.log(`current health: ${currentHealth}`);
  }, [currentHealth]);


  return (
    <div className="game-page | backdrop"> 
      <gameContext.Provider value={{ revealedLetters, currentHealth, mysteryWord, TOTAL_HEALTH }}>
        <GameHeader categoryName="placeholder" onMenuClick={handlePanelOpening} />

        <section className="game-page__mystery-word-section"> 
          <ul className="mystery-word" role="list"> 
            {
              mysteryWord.split(" ").map((word, index) => {
                return (
                  <li key={`${word}-${index}`}>
                    <LetterBlocks word={word} wordIndex={index}/>
                  </li>
                )
              })
            }
          </ul>
        </section>

        <section className="game-page__keyboard-section"> 
          <Keyboard onLetterBlockClick={handleLetterBlockClick}/>
        </section>

        <OverlayPortal>
          <GameActionPanel ref={actionPanelRef}/>
        </OverlayPortal>
      </gameContext.Provider>
    </div>  
  )
}

/*
TODO:
Завершение игры:
Если не осталось hp, открыть модалку со соответсвуюшей надписью
Если победа, открыть модалку со соответсвуюшей надписью
В режиме окончания игры кнопка continue должна выполнять иную функцию

Победа:
Каждый рендер проверить или загадное слово имеет все revealed letters (с помошью .every() ?)

Нам нужен некий state для завершения работы ?
*/
