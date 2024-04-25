import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";


function renderGameboard (player, box) {
    const container = document.createElement('div');
    container.classList.add('container')
    for (let i = 0; i < player.gameboard.gameboard.length; i++) {
        for (let j = 0; j < player.gameboard.gameboard[i].length; j++) {
        const square = document.createElement('div');
        if(player.type === 'You') {
            if(typeof(player.gameboard.gameboard[i][j]) === 'object') {
                square.innerHTML = player.gameboard.gameboard[i][j].value;
                square.classList.add('black')
            } else {
                square.innerHTML = player.gameboard.gameboard[i][j];
            }
        } else {
            
        }
        square.addEventListener('click', () => {
            player.gameboard.receiveAttack([i],[j])
            if(typeof(player.gameboard.gameboard[i][j]) === 'object') {
                square.innerHTML = player.gameboard.gameboard[i][j].value;

                square.classList.add('orange')
            } else {
                square.innerHTML = player.gameboard.gameboard[i][j];
            }

        })
        container.appendChild(square);
        }
    }
    box.append(container)
}

export {renderGameboard}