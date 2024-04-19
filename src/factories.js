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
            gameBoard[i][j] = null;
          }
        }
        return gameBoard;
    };

    const gameboard = createGameBoard();

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
        if (_isWithinBounds(col)&&_isWithinBounds(row)&&gameboard[col][row] === null) {
            if (direction === 'vertical'&&_isWithinBounds(col+ship.length)) {
                for (let i = col; i < col+ship.length; i++) {
                    if(gameboard[i][row] === null) {
                    gameboard[i][row] = {
                        type: `${ship.length}ship`,
                        ship: ship,
                        value: 'O'
                    };
                    } else return console.log('Invalid spot')
                }
            }

            if (direction === 'horizontal'&&_isWithinBounds(row+ship.length)) {
                for (let i = row; i < row+ship.length; i++) {
                    if(gameboard[col][i] === null) {
                    gameboard[col][i] = {
                        type: `${ship.length}ship`,
                        ship: ship,
                        value: 'O'
                    };
                    } else return console.log('Invalid spot')
                }
            }
        } else { return console.log('Index out of board')}

        return gameboard;
    } 

    //Currently testing this in index.js
    // Have an idea how to mark spots near wounded ship: to check coordinate of the spot with  if (col-1,col+1, row-1,row+1 all !== 'O') to become “·” U+00B7 Middle Dot Unicode Character.
    function receiveAttack (col, row) {
        if (_isWithinBounds(col)&&_isWithinBounds(row)) {
            let boardCell = gameboard[col][row];
            if(boardCell === null) {
                gameboard[col][row] = '·';
                console.log('Miss')
            } else if (boardCell.value === 'O') {
                boardCell.ship.hit();
                boardCell.value = 'X';
                // _markCellsAraundSuccsessfullHit(col, row)
                console.log(boardCell.ship.getHits());
                if(boardCell.ship.isSunk()) return console.log('Sunk')
            }


        } else { return console.log('Attack out of board')}
    }

    //Partly working but need to check corners neiborours also. And now only working with 1 deck ships(need to update cheking to somehow regulate out of board cells!!)
    // function _markCellsAraundSuccsessfullHit(col, row) {
    //     if(gameboard[col+1][row]===null&&gameboard[col-1][row]===null&&gameboard[col][row+1]===null&&gameboard[col][row-1]===null&&gameboard[col+1][row]===null&&gameboard[col-1][row]===null&&gameboard[col][row+1]===null&&gameboard[col][row-1]===null) {
    //         gameboard[col+1][row] = '·';
    //         gameboard[col-1][row] = '·';
    //         gameboard[col][row+1] = '·';
    //         gameboard[col][row-1] = '·';

    //     }
    // }

    return {
        gameboard,
        placeShip,
        receiveAttack
    }
}




export { 
    Ship, 
    Gameboard
}