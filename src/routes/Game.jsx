// react
import { createContext, useEffect, useRef, useMemo, useReducer } from 'react'
import { useParams } from 'react-router-dom';

// data
import { TOTAL_HEALTH } from '../gameData';
import { getCategoryNames, getGameData } from '../gameData';

// reducer 
import { CURRENT_GAME_ACTIONS } from '../currentGameActions';
import currentGameReducer, { GAME_INITIAL_STATE } from '../currentGameReducer';

// components 
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

  const { mysteryWord, currentHealth, revealedLetters } = game
  // get unqiue letters from mystery word without spaces 
  const mysterWordLetters = Array.from(new Set(mysteryWord.split("").filter(letter => letter !== " ")));
  const actionPanelRef = useRef(null);


  function startNewGame() {
    const newWord = chooseNewWord();
    dispatch({type: CURRENT_GAME_ACTIONS.CHOOSE_NEW_WORD, payload: newWord});
  }

  function chooseNewWord() {
    const randomWordIndex = Math.floor(Math.random() * getGameData()[currentCategoryName].length);

    return currentCategoryData[randomWordIndex].name.toLowerCase();
  }

  function handlePanelOpening() {
    actionPanelRef.current.showModal();
  }

  function handleEndingPanelOpening(gameResultText) {
    handlePanelOpening();
    dispatch({type: CURRENT_GAME_ACTIONS.END_GAME, payload: gameResultText})
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

  // choosing new word
  useEffect(startNewGame, []);

  // controlling the amount of remaining health, loss condition
  useEffect(() => {
    if (currentHealth < 1) {
      return handleEndingPanelOpening("You Lose")
    }

    console.log(`current health: ${currentHealth}`);
  }, [currentHealth]);

  // control, if all letters are guessed, winning condition
  useEffect(() => {
    if (mysterWordLetters.length < 1) {
      return
    }

    if (revealedLetters.length === mysterWordLetters.length) {
      return handleEndingPanelOpening("You Won")
    }
  }, [revealedLetters]);

  // debugging 
  useEffect(() => {
    console.log(game);
  }, [game])


  return (
    <div className="game-page | grid | backdrop"> 
      <gameContext.Provider value={{ TOTAL_HEALTH, game, dispatch, startNewGame }}>

        <GameHeader categoryName={currentCategoryName} onMenuClick={handlePanelOpening}/>

        <div className="grid">
          <section className="game-page__mystery-word-section"> 
            <span className="visually-hidden" aria-live="assertive"> 
              {revealedLetters.length} of {mysterWordLetters.length} letters guessed 
            </span>

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
        </div>

        <OverlayPortal>
          <GameActionPanel ref={actionPanelRef}/>
        </OverlayPortal>
      </gameContext.Provider>
    </div>  
  )
}