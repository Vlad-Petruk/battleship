import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { renderGameboard } from "./UI";

document.addEventListener('DOMContentLoaded', () => {
    const playerBoardBox = document.querySelector('.gameboard-one');
    const computerBoardBox = document.querySelector('.gameboard-two');
    const header = document.querySelector('.header');

    const realPlayer = Player('human');
    const compPlayer = Player('computer');
    const threeDeckShip = Ship(3);

    // realPlayer.gameboard.placeShip(0,0, threeDeckShip, 'horizontal')

    renderGameboard(realPlayer, playerBoardBox);
    renderGameboard(compPlayer, computerBoardBox)

    


    console.log(realPlayer.gameboard.gameboard)
});
















// const myShip = Ship(4);
// const anotherShip = Ship(2);
// const bigShip = Ship(4);
// const newBoard = Gameboard();
// newBoard.placeShip(0, 0, myShip, "vertical");
// newBoard.placeShip(2, 2, anotherShip, "horizontal");
// newBoard.placeShip(9, 6, bigShip, "horizontal");

// // newBoard.receiveAttack(0,0)
// // newBoard.receiveAttack(1,0)
// // newBoard.receiveAttack(2,0)

// newBoard.receiveAttack(2, 2);
// newBoard.receiveAttack(2, 3);

// newBoard.receiveAttack(9, 7);

// console.log(newBoard.gameboard);
