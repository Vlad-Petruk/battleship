import { Gameboard } from "./gameboard";
import { Ship } from "./ship";
import { Player } from "./player";
import { renderPlayerGameboard, renderCompGameboard } from "./UI";

let playerGameboard
document.addEventListener('DOMContentLoaded', () => {
    
    const playerBoardBox = document.querySelector('.gameboard-one');
    const computerBoardBox = document.querySelector('.gameboard-two');

    const realPlayer = Player('You');
    const compPlayer = Player('Computer');

    const fourShip = Ship(4)
    const threeShipOne = Ship(3);
    const threeShipTwo = Ship(3);
    const twoShipOne = Ship(2);
    const twoShipTwo = Ship(2);
    const twoShipThree = Ship(2);
    const oneShipOne = Ship(1);
    const oneShipTwo = Ship(1);
    const oneShipThree = Ship(1);
    const oneShipFour = Ship(1);


    realPlayer.gameboard.placeShip(0,0, fourShip, 'horizontal');
    realPlayer.gameboard.placeShip(9,6, threeShipOne, 'horizontal');
    realPlayer.gameboard.placeShip(0,9, threeShipTwo, 'vertical');
    realPlayer.gameboard.placeShip(8,0, twoShipOne, 'horizontal');
    realPlayer.gameboard.placeShip(5,4, twoShipTwo, 'vertical');
    realPlayer.gameboard.placeShip(2,6, twoShipThree, 'horizontal');
    realPlayer.gameboard.placeShip(8,4, oneShipOne, 'horizontal');
    realPlayer.gameboard.placeShip(2,2, oneShipTwo, 'horizontal');
    realPlayer.gameboard.placeShip(6,8, oneShipThree, 'horizontal');
    realPlayer.gameboard.placeShip(5,0, oneShipFour, 'horizontal');

    compPlayer.gameboard.placeShip(0,0, fourShip, 'horizontal');
    compPlayer.gameboard.placeShip(9,6, threeShipOne, 'horizontal');
    compPlayer.gameboard.placeShip(0,9, threeShipTwo, 'vertical');
    compPlayer.gameboard.placeShip(8,0, twoShipOne, 'horizontal');
    compPlayer.gameboard.placeShip(5,4, twoShipTwo, 'vertical');
    compPlayer.gameboard.placeShip(2,6, twoShipThree, 'horizontal');
    compPlayer.gameboard.placeShip(8,4, oneShipOne, 'horizontal');
    compPlayer.gameboard.placeShip(2,2, oneShipTwo, 'horizontal');
    compPlayer.gameboard.placeShip(7,8, oneShipThree, 'horizontal');
    compPlayer.gameboard.placeShip(5,0, oneShipFour, 'horizontal');

    
    playerGameboard = renderPlayerGameboard(realPlayer, playerBoardBox);
    renderCompGameboard(compPlayer, computerBoardBox)

    playerGameboard.render();
    
});

export {playerGameboard}
