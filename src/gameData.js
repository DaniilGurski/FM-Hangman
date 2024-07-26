import data from "./assets/data.json";

export const TOTAL_HEALTH = 3;

export function getGameData() {
    return data.categories;
}

export function getCategoryNames() {
    return Object.keys(getGameData());
}

