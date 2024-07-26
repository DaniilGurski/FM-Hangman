import { TOTAL_HEALTH } from "./gameData"


export const GAME_INITIAL_STATE = {
    isRunning: true,
    currentHealth: TOTAL_HEALTH,
    mysteryWord: "",
    panelText: "paused",
    revealedLetters: [],
    disabledLetters: [],
}

export default function currentGameReducer(state, action) {
    switch (action.type) {
        case "choose new word":
            return {
                isRunning: true,
                currentHealth: TOTAL_HEALTH,
                mysteryWord: action.payload,
                panelText: "paused",
                revealedLetters: [],
                disabledLetters: [],
            }

        case "set modal text": {
            return {
                ...state,
                panelText: action.payload
            }
        }

        case "add revealed letter": {
            return {
                ...state, 
                revealedLetters: [...state.revealedLetters, action.payload],
            }
        }

        case "add disabled letter": {
            return {
                ...state,
                disabledLetters: [...state.disabledLetters, action.payload]
            }
        }

        case "decrement attempts": {
            return {
                ...state, 
                currentHealth: state.currentHealth - 1
            }
        }

        case "end game": {
            return {
                ...state, 
                panelText: action.payload,
                isRunning: false,
            }
        }

        default: return state
    }
}