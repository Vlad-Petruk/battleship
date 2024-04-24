import { Gameboard, Ship } from "./factories";

const myShip = Ship(4);
const anotherShip = Ship(2)
const bigShip = Ship(4)
const newBoard = Gameboard()
newBoard.placeShip(0,0, myShip, 'vertical');
newBoard.placeShip(2,2, anotherShip, 'horizontal');
newBoard.placeShip(9,6, bigShip, 'horizontal')


// newBoard.receiveAttack(0,0)
// newBoard.receiveAttack(1,0)
// newBoard.receiveAttack(2,0)

newBoard.receiveAttack(2,2);
newBoard.receiveAttack(2,3);

newBoard.receiveAttack(9,7)


console.log(newBoard.gameboard)