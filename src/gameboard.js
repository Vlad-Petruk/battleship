import { modal } from "./UI";

const Gameboard = (player) => {
  function createGameBoard() {
    const gameBoard = [];
    for (let i = 0; i <= 9; i++) {
      gameBoard[i] = [];
      for (let j = 0; j <= 9; j++) {
        gameBoard[i][j] = "";
      }
    }
    return gameBoard;
  }

  const gameboard = createGameBoard();
  const ships = [];

  function _isWithinBounds(index) {
    if (index < 0 || index > 9) {
      return false;
    } else {
      return true;
    }
  }

  //start and end here - indexes of the bord's cells where i want to place ship
  function placeShip(col, row, ship, direction) {
    if (_isWithinBounds(col) && _isWithinBounds(row) && !_checkCellsAround(col, row)) {
        if (direction === "vertical" && _isWithinBounds(col + ship.length - 1)&&!_checkCellsAround(col + ship.length - 1, row)) {
            for (let i = col; i < col + ship.length; i++) {
                if (gameboard[i][row] === "" ) {
                    gameboard[i][row] = {
                        type: `${player}${ship.length}ship`,
                        ship: ship,
                        value: "O",
                        isSunk: false,
                    };
                    ships.push(gameboard[i][row]);
                } else return 2; 
            }
        } else if (direction === "horizontal" && _isWithinBounds(row + ship.length - 1)&&!_checkCellsAround(col, row + ship.length - 1)) {
            for (let i = row; i < row + ship.length; i++) {
                if (gameboard[col][i] === "") {
                    gameboard[col][i] = {
                        type: `${player}${ship.length}ship`,
                        ship: ship,
                        value: "O",
                        isSunk: false,
                    };
                    ships.push(gameboard[col][i]);
                } else return 2; 
            }
        } else return 2; 
    } else return 2; 

    return gameboard;
}

  

  //Currently testing this in index.js
  function receiveAttack(col, row) {
    if (_isWithinBounds(col) && _isWithinBounds(row)) {
      let boardCell = gameboard[col][row];
        if (boardCell === "") {
        gameboard[col][row] = '\u25CF';
      } else if (boardCell.value === "O") {
        boardCell.ship.hit();
        boardCell.value = "X";
        if (boardCell.ship.isSunk()) {
          boardCell.isSunk = true;
          _markCellsAroundSuccsessfullHit(col, row);
          console.log("Sunk");
        }
        console.log(boardCell.isSunk);
        checkEndGame()
      }
    } else {
      return console.log("Attack out of board");
    }
  }

  function _checkCellsAround(col, row) {
    const neighbours = [
      gameboard[col + 1]?.[row],
      gameboard[col - 1]?.[row],
      gameboard[col]?.[row + 1],
      gameboard[col]?.[row - 1],
      gameboard[col + 1]?.[row + 1],
      gameboard[col - 1]?.[row - 1],
      gameboard[col - 1]?.[row + 1],
      gameboard[col + 1]?.[row - 1],
    ];

    for (let i = 0; i < neighbours.length; i++) {
      if (neighbours[i] && neighbours[i].value === "O") {
        return true;
    }
  } 
  return false
}

//Need to mark not only around one cell
function _markCellsAroundSuccsessfullHit(col, row) {
  const neighbours = [
    gameboard[col + 1]?.[row],
    gameboard[col - 1]?.[row],
    gameboard[col]?.[row + 1],
    gameboard[col]?.[row - 1],
    gameboard[col + 1]?.[row + 1],
    gameboard[col - 1]?.[row - 1],
    gameboard[col - 1]?.[row + 1],
    gameboard[col + 1]?.[row - 1],
  ];

  for (let i = 0; i < neighbours.length; i++) {
    if (
      neighbours[i] !== undefined &&
      neighbours[i].value !== "O") {
      neighbours[i] = '\u25CF';
        // Update corresponding value in gameboard array
      switch (i) {
        case 0:
          if (gameboard[col + 1] !== undefined && gameboard[col + 1][row] !== 'X') {
            gameboard[col + 1][row] = '\u25CF';
          }
          break;
        case 1:
          if (gameboard[col - 1] !== undefined && gameboard[col - 1][row] !== 'X') {
            gameboard[col - 1][row] = '\u25CF';
          }
          break;
        case 2:
          if (gameboard[col][row + 1] !== undefined && gameboard[col][row + 1] !== 'X') {
            gameboard[col][row + 1] = '\u25CF';
          }
          break;
        case 3:
          if (gameboard[col][row - 1] !== undefined && gameboard[col][row - 1] !== 'X') {
            gameboard[col][row - 1] = '\u25CF';
          }
          break;
        case 4:
          if (gameboard[col + 1] !== undefined && gameboard[col + 1][row + 1] !== 'X') {
            gameboard[col + 1][row + 1] = '\u25CF';
          }
          break;
        case 5:
          if (gameboard[col - 1] !== undefined && gameboard[col - 1][row - 1] !== 'X') {
            gameboard[col - 1][row - 1] = '\u25CF';
          }
          break;
        case 6:
          if (gameboard[col - 1] !== undefined && gameboard[col - 1][row + 1] !== 'X') {
            gameboard[col - 1][row + 1] = '\u25CF';
          }
          break;
        case 7:
          if (gameboard[col + 1] !== undefined && gameboard[col + 1][row - 1] !== 'X') {
            gameboard[col + 1][row - 1] = '\u25CF';
          }
          break;
        default:
          break;
      }
      
    } else console.log('asfasf')
  }
}

  function checkEndGame() {
    let counter = 0;
    for (let i = ships.length - 1; i >= 0; i--) {
      if (ships[i].ship.isSunk() === true) {
        counter++ ;
        // console.log(`${player} - Ship ${i} is sunk`);
    }
   }
  //  console.log(ships)
    console.log(counter);
    if (counter >= 20) {
      let news= modal(`${player}`);
      news.openModal()
      console.log(`${player} lose`);
      return true;
    }
  }

  return {
    gameboard,
    placeShip,
    receiveAttack,
    checkEndGame,
  };
};

export { Gameboard }
