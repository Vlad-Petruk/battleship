const Ship = (shipLength) => {
    const length = shipLength;
    let hits = 0;

    function hit() {
        hits+=1;
    }

    function isSunk() {
        if(shipLength <= hits) {
            return true;
        } else return false;
    }

    return {
        hit,
        isSunk,
        length,
        getHits: () => hits
    }
}

const Gameboard = () => {
    function createGameBoard () {
        const gameBoard = [];
        for (let i = 0; i <= 9; i++) {
          gameBoard[i] = [];
          for (let j = 0; j <= 9; j++) {
            gameBoard[i][j] = '';
          }
        }
        return gameBoard;
    };

    const gameboard = createGameBoard();
    const ships = [];

    function _isWithinBounds (index) {
        if (index < 0 || index > 9) {
          return false;
        } else {
          return true;
        }
      };

    //start and end here - indexes of the bord's cells where i want to place ship
    // the coordinate object should have a reference to the ship in its location.
    function placeShip(col, row, ship, direction) {
        if (_isWithinBounds(col)&&_isWithinBounds(row)&&gameboard[col][row] === '') {
            if (direction === 'vertical'&&_isWithinBounds(col+ship.length-1)) {
                for (let i = col; i < col+ship.length; i++) {
                    if(gameboard[i][row] === '') {
                    gameboard[i][row] = {
                        type: `${ship.length}ship`,
                        ship: ship,
                        value: 'O',
                        isSunk: false
                    };
                    ships.push(gameboard[i][row])
                    } else return console.log('Invalid spot')
                }
            }

            if (direction === 'horizontal'&&_isWithinBounds(row+ship.length-1)) {
                for (let i = row; i < row+ship.length; i++) {
                    if(gameboard[col][i] === '') {
                    gameboard[col][i] = {
                        type: `${ship.length}ship`,
                        ship: ship,
                        value: 'O',
                        isSunk: false
                    };
                    ships.push(gameboard[col][i])
                    } else return console.log('Invalid spot')
                }
            }
        } else { return console.log('Index out of board')}

        return gameboard;
    } 

    //Currently testing this in index.js
    function receiveAttack (col, row) {
        if (_isWithinBounds(col)&&_isWithinBounds(row)) {
            let boardCell = gameboard[col][row];
            if (boardCell === '·') {
                return;
            } else if(boardCell === '') {
                gameboard[col][row] = '·';
                console.log('Miss')
            } else if (boardCell.value === 'O') {
                boardCell.ship.hit();
                boardCell.value = 'X';
                if (boardCell.ship.isSunk()) {
                    boardCell.isSunk = true;
                    _markCellsAroundSuccsessfullHit(col, row);
                    console.log('Sunk')
                }
                console.log(boardCell.isSunk);
            }


        } else { return console.log('Attack out of board')}
    }

    function _markCellsAroundSuccsessfullHit(col, row) {
        const neighbours = [
            gameboard[col + 1]?.[row], 
            gameboard[col - 1]?.[row],
            gameboard[col]?.[row + 1],
            gameboard[col]?.[row - 1],
            gameboard[col + 1]?.[row + 1],
            gameboard[col - 1]?.[row - 1],
            gameboard[col - 1]?.[row + 1],
            gameboard[col + 1]?.[row - 1]
        ];
        
        for (let i = 0; i < neighbours.length; i++) {
            if (neighbours[i] !== undefined&&neighbours[i].value !== 'O'&&neighbours[i].value !== 'X') {
                neighbours[i] = '·';
                // Update corresponding value in gameboard array
                switch (i) {
                    case 0: 
                        gameboard[col + 1][row] = '·';
                        break;
                    case 1: 
                        gameboard[col - 1][row] = '·';
                        break;
                    case 2: 
                        gameboard[col][row + 1] = '·';
                        break;
                    case 3:
                        gameboard[col][row - 1] = '·';
                        break;
                    case 4: 
                        gameboard[col + 1][row + 1] = '·';
                        break;
                    case 5: 
                        gameboard[col - 1][row - 1] = '·';
                        break;
                    case 6: 
                        gameboard[col - 1][row + 1] = '·';
                        break;
                    case 7:
                        gameboard[col + 1][row - 1] = '·';
                        break;
                    default:
                        break;
                }
            }
        }
    }

    function checkEndGame() {
        let counter = 0;
        for (let ship of ships) {
            if(ship.isSunk === true) {
                counter++;
            }
        }
        console.log(counter)
        if(counter>=10) {
            console.log('End game')
        }
    }

    console.log(ships)

    return {
        gameboard,
        placeShip,
        receiveAttack,
        checkEndGame
    }
}


export { 
    Ship, 
    Gameboard
}