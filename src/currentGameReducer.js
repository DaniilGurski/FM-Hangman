export const GAME_INITIAL_STATE = {
    currentHealth: null,
    gameStatus: "running",
    mysteryLetters: [],
}

export default function currentGameReducer(state, action) {
    switch (action.type) {
        case "new game":
            return state
        case "set status":
            return state
        case "decrement attempts":
            return state
        default:
            return state
    }
}