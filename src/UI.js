import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";


function renderGameboard (player, box) {
    const container = document.createElement('div');
    container.classList.add('container')
    for (let i = 0; i < player.gameboard.gameboard.length; i++) {
        for (let j = 0; j < player.gameboard.gameboard[i].length; j++) {
        //   console.log(player.gameboard.gameboard[i][j])
        const square = document.createElement('div');
        square.innerHTML = player.gameboard.gameboard[i][j];
        container.appendChild(square);
        }
    }
    box.append(container)
}

export {renderGameboard}