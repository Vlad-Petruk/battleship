import { Gameboard, Ship } from "./factories";

const myShip = Ship(3);
const anotherShip = Ship(1)
const newBoard = Gameboard()
newBoard.placeShip(0,0, myShip, 'vertical');
newBoard.placeShip(2,2, anotherShip, 'horizontal');


// newBoard.receiveAttack(0,0)
// newBoard.receiveAttack(1,0)
// newBoard.receiveAttack(2,0)

newBoard.receiveAttack(2,2)

newBoard.receiveAttack(5,4)

console.log(newBoard)