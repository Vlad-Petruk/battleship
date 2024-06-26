import { Ship } from "./ship";
import { Player } from "./player";
import { renderPlayerGameboard, renderCompGameboard } from "./UI";

let playerGameboard;
function playGame() {
  const playerBoardBox = document.querySelector(".gameboard-one");
  const computerBoardBox = document.querySelector(".gameboard-two");

  const realPlayer = Player("You");
  const compPlayer = Player("Computer");

  const fourShip = Ship(4);
  const threeShipOne = Ship(3);
  const threeShipTwo = Ship(3);
  const twoShipOne = Ship(2);
  const twoShipTwo = Ship(2);
  const twoShipThree = Ship(2);
  const oneShipOne = Ship(1);
  const oneShipTwo = Ship(1);
  const oneShipThree = Ship(1);
  const oneShipFour = Ship(1);

  const fourShipComp = Ship(4);
  const threeShipOneComp = Ship(3);
  const threeShipTwoComp = Ship(3);
  const twoShipOneComp = Ship(2);
  const twoShipTwoComp = Ship(2);
  const twoShipThreeComp = Ship(2);
  const oneShipOneComp = Ship(1);
  const oneShipTwoComp = Ship(1);
  const oneShipThreeComp = Ship(1);
  const oneShipFourComp = Ship(1);

  const ships = [
    fourShip,
    threeShipOne,
    threeShipTwo,
    twoShipOne,
    twoShipTwo,
    twoShipThree,
    oneShipOne,
    oneShipTwo,
    oneShipThree,
    oneShipFour,
  ];

  const shipsComp = [
    fourShipComp,
    threeShipOneComp,
    threeShipTwoComp,
    twoShipOneComp,
    twoShipTwoComp,
    twoShipThreeComp,
    oneShipOneComp,
    oneShipTwoComp,
    oneShipThreeComp,
    oneShipFourComp,
  ];

  function getRandomString(string1, string2) {
    return Math.random() < 0.5 ? string1 : string2;
  }

  //Renders all ships but the ships touch each other on the board
  //Need to update placeShip
  function renderShip(gameboard, ships) {
    const horizontal = "horizontal";
    const vertical = "vertical";

    ships.forEach((ship) => {
      let shipPlaced = false;
      while (!shipPlaced) {
        let orientation = getRandomString(horizontal, vertical);
        let col = Math.floor(Math.random() * 10);
        let row = Math.floor(Math.random() * 10);
        let result = gameboard.gameboard.placeShip(col, row, ship, orientation);
        if (result !== 2) {
          shipPlaced = true;
        }
      }
    });
  }

  renderShip(realPlayer, ships);
  renderShip(compPlayer, shipsComp);
  // realPlayer.gameboard.placeShip(0,0, fourShip, 'horizontal');
  // realPlayer.gameboard.placeShip(9,6, threeShipOne, 'horizontal');
  // realPlayer.gameboard.placeShip(0,9, threeShipTwo, 'vertical');
  // realPlayer.gameboard.placeShip(8,0, twoShipOne, 'horizontal');
  // realPlayer.gameboard.placeShip(5,4, twoShipTwo, 'vertical');
  // realPlayer.gameboard.placeShip(2,6, twoShipThree, 'horizontal');
  // realPlayer.gameboard.placeShip(8,4, oneShipOne, 'horizontal');
  // realPlayer.gameboard.placeShip(2,2, oneShipTwo, 'horizontal');
  // realPlayer.gameboard.placeShip(6,8, oneShipThree, 'horizontal');
  // realPlayer.gameboard.placeShip(5,0, oneShipFour, 'horizontal');

  // compPlayer.gameboard.placeShip(0,0, fourShip, 'horizontal');
  // compPlayer.gameboard.placeShip(9,6, threeShipOne, 'horizontal');
  // compPlayer.gameboard.placeShip(0,9, threeShipTwo, 'vertical');
  // compPlayer.gameboard.placeShip(8,0, twoShipOne, 'horizontal');
  // compPlayer.gameboard.placeShip(5,4, twoShipTwo, 'vertical');
  // compPlayer.gameboard.placeShip(2,6, twoShipThree, 'horizontal');
  // compPlayer.gameboard.placeShip(8,4, oneShipOne, 'horizontal');
  // compPlayer.gameboard.placeShip(2,2, oneShipTwo, 'horizontal');
  // compPlayer.gameboard.placeShip(7,8, oneShipThree, 'horizontal');
  // compPlayer.gameboard.placeShip(5,0, oneShipFour, 'horizontal');

  playerGameboard = renderPlayerGameboard(realPlayer, playerBoardBox);
  renderCompGameboard(compPlayer, computerBoardBox);

  playerGameboard.render();
}

export { playerGameboard, playGame };
