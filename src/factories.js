const Ship = (shipLength) => {
    const length = shipLength;
    let hits = 0;

    function hit() {
        hits++;
    }

    function isSunk() {
        if(shipLength <= hits) {
            return true;
        } else return false;
    }

    return {
        hit,
        isSunk,
        length
    }
}

const Gameboard = () => {
    function createGameBoard () {
        const gameBoard = [];
        for (let i = 0; i <= 9; i++) {
          gameBoard[i] = [];
          for (let j = 0; j <= 9; j++) {
            gameBoard[i][j] = null;
          }
        }
        return gameBoard;
    };

    const gameboard = createGameBoard();

    function isWithinBounds (index) {
        if (index < 0 || index > 9) {
          return false;
        } else {
          return true;
        }
      };

    //start and end here - indexes of the bord's cells where i want to place ship
    // the coordinate object should have a reference to the ship in its location.
    function placeShip(col, row, ship, direction) {
        if (gameboard[col][row] === null&&isWithinBounds(col)&&isWithinBounds(row)) {
            if (direction === 'vertical'&&isWithinBounds(col+ship.length)) {
                for (let i = col; i < col+ship.length; i++) {
                    if(gameboard[i][row] === null) {
                    gameboard[i][row] = {
                        type: `${ship.length}ship`,
                        ship: ship
                    };
                    } else return console.log('Invalid spot')
                }
            }

            if (direction === 'gorizontal'&&isWithinBounds(row+ship.length)) {
                for (let i = row; i < row+ship.length; i++) {
                    if(gameboard[row][i] === null) {
                    gameboard[row][i] = {
                        type: `${ship.length}ship`,
                        ship: ship
                    };
                    console.log(gameboard[row][i])
                    } else return console.log('Invalid spot')
                }
            }
        }

        return gameboard;
    }

    return {
        gameboard,
        placeShip
    }
}




export { 
    Ship, 
    Gameboard
}