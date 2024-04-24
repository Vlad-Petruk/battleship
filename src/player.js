import { Gameboard } from "./gameboard"

const Player = (playertype) => {
    const type = playertype;

    const gameboard = Gameboard();

    return {
        type,
        gameboard
    }
}

export {Player}