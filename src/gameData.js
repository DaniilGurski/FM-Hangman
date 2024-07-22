import data from "./assets/data.json";

export function getGameData() {
    return data.categories;
}

export function getCategoryNames() {
    return Object.keys(getGameData());
}

