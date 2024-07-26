import { createContext, useEffect, useRef, useState, useMemo, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import { getCategoryNames, getGameData } from '../gameData';

import { CURRENT_GAME_ACTIONS } from '../currentGameActions';
import { TOTAL_HEALTH } from '../gameData';
import currentGameReducer, { GAME_INITIAL_STATE } from '../currentGameReducer';
import GameHeader from '../components/GameHeader';
import OverlayPortal from '../components/OverlayPortal';
import GameActionPanel from '../components/GameActionPanel';
import Keyboard from '../components/Keyboard';
import LetterBlocks from '../components/LetterBlocks';

export const gameContext = createContext();

export default function Game() {
  const currentCategoryIndex = useParams().category - 1;
  const {currentCategoryName, currentCategoryData} = useMemo(() => {
    const categoryNames = getCategoryNames();
    const gameData = getGameData();

    return {
      currentCategoryName: categoryNames[currentCategoryIndex],
      currentCategoryData: gameData[categoryNames[currentCategoryIndex]],
    }
  }, [currentCategoryIndex]);

  const [game, dispatch] = useReducer(currentGameReducer, GAME_INITIAL_STATE);

  const { mysteryWord, currentHealth } = game 
  const actionPanelRef = useRef(null);


  function handlePanelOpening() {
    actionPanelRef.current.showModal();
  }


  function handleLetterBlockClick(e) {
    const selectedLetter = e.target.innerText;
    const button = e.target;

    dispatch({type: CURRENT_GAME_ACTIONS.ADD_DISABLED_LETTER, payload: button});

    if (mysteryWord.includes(selectedLetter)) {
      dispatch({type: CURRENT_GAME_ACTIONS.ADD_REVEALED_LETTER, payload: selectedLetter})
      return
    }

    dispatch({type: CURRENT_GAME_ACTIONS.DECREMENT_ATTEMPTS})
  }


  function chooseNewWord() {
    const randomWordIndex = Math.floor(Math.random() * getGameData()[currentCategoryName].length);

    return currentCategoryData[randomWordIndex].name.toLowerCase();
  }


  function startNewGame() {
    const newWord = chooseNewWord();
    dispatch({type: CURRENT_GAME_ACTIONS.CHOOSE_NEW_WORD, payload: newWord});
  }


  // choosing new word
  useEffect(startNewGame, []);


  // health
  useEffect(() => {
    if (currentHealth < 1) {
      handlePanelOpening();
      dispatch({type: CURRENT_GAME_ACTIONS.END_GAME, payload: "You Lose"})
    }

    console.log(`current health: ${currentHealth}`);
  }, [currentHealth]);


  // debugging 
  useEffect(() => {
    console.log(game);
  }, [game])


  return (
    <div className="game-page | backdrop"> 
      <gameContext.Provider value={{ TOTAL_HEALTH, game, dispatch, startNewGame, disabledLetters }}>
        <GameHeader categoryName="placeholder" onMenuClick={handlePanelOpening}/>

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


// const [isRunning, setIsRunning] = useState(true);
// const [panelText, setPanelText] = useState("");
// const [mysteryWord, setMysteryWord] = useState("");
// const [currentHealth, setCurrentHealth] = useState(TOTAL_HEALTH);
// const [revealedLetters, setRevealedLetters] = useState([]);

// function handlePanelClosing() {
//   if (!isRunning) {
//     console.log("choosing new word...");
//   }
//   actionPanelRef.current.close();
// }

  // useEffect(() => {
  //   if (!currentHealth) {
  //     handlePanelOpening("You Lose")
  //     setIsRunning(false)

  //   }

  //   console.log(`current health: ${currentHealth}`);
  // }, [currentHealth]);
