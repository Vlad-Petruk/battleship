import { Gameboard, Ship } from "./factories";

const myShip = Ship(3)
const newBoard = Gameboard()
newBoard.placeShip(0,0, myShip, 'vertical');
console.log(newBoard)