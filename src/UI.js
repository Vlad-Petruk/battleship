import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";


function renderPlayerGameboard(player, box) {
    const container = document.createElement('div');
    container.classList.add('container')
    function render() {   
        container.textContent = ''; 
        for (let i = 0; i < player.gameboard.gameboard.length; i++) {
            for (let j = 0; j < player.gameboard.gameboard[i].length; j++) {
                const square = document.createElement('div');
                if(typeof(player.gameboard.gameboard[i][j]) === 'object') {
                    if(player.gameboard.gameboard[i][j].value = 'O') {
                        square.innerHTML = player.gameboard.gameboard[i][j].value;
                        square.classList.add('black')
                    } 
                } else if (player.gameboard.gameboard[i][j] === "X"){
                    square.innerHTML = player.gameboard.gameboard[i][j]; 
                    square.classList.add('orange')
                }
                else {
                    square.innerHTML = player.gameboard.gameboard[i][j];
                }
                container.appendChild(square);
            }   
        }
        box.append(container)
    }
    function attack () {
        let colRandom = Math.floor(Math.random() * 10);
        let rowRandom = Math.floor(Math.random() * 10);
        if(player.gameboard.gameboard[colRandom][rowRandom] !== '\u25CF'&&player.gameboard.gameboard[colRandom][rowRandom].value !== 'X') {
            player.gameboard.receiveAttack(colRandom,rowRandom);
            if(typeof(player.gameboard.gameboard[colRandom][rowRandom]) === 'object') {
                player.gameboard.gameboard[colRandom][rowRandom] = player.gameboard.gameboard[colRandom][rowRandom].value;
                render()
            } else {
                render() 
            }
        }
    }

    return {
        render,
        attack
    }
}

function renderCompGameboard (player, box) {
    const container = document.createElement('div');
    container.classList.add('container')
    for (let i = 0; i < player.gameboard.gameboard.length; i++) {
        for (let j = 0; j < player.gameboard.gameboard[i].length; j++) {
            const square = document.createElement('div');
            container.appendChild(square);
            square.addEventListener('click', () => {
                player.gameboard.receiveAttack([i],[j])
                if(typeof(player.gameboard.gameboard[i][j]) === 'object') {
                    square.innerHTML = player.gameboard.gameboard[i][j].value;
    
                    square.classList.add('orange')
                } else {
                    square.innerHTML = player.gameboard.gameboard[i][j];
                }
            })
        }
    }
    box.append(container);
}
   

export {
    renderPlayerGameboard,
    renderCompGameboard
}