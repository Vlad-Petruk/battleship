import { playerGameboard } from ".";

//Need to write end game massage, stop possibility of clicks if endGame

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

    const MAX_ATTEMPTS = 99;

    function attack(attempt = 0) {
        if (attempt >= MAX_ATTEMPTS) {
            console.log("Maximum attempts reached. Exiting attack function.");
            return;
        }
        
        let colRandom = Math.floor(Math.random() * 10);
        let rowRandom = Math.floor(Math.random() * 10);
    
        if (
            player.gameboard.gameboard[colRandom][rowRandom] !== '\u25CF' &&
            player.gameboard.gameboard[colRandom][rowRandom].value !== 'X' &&
            player.gameboard.gameboard[colRandom][rowRandom] !== 'X'
        ) {
            player.gameboard.receiveAttack(colRandom, rowRandom);
            if (typeof player.gameboard.gameboard[colRandom][rowRandom] === 'object') {
                player.gameboard.gameboard[colRandom][rowRandom] = player.gameboard.gameboard[colRandom][rowRandom].value;
                setTimeout(attack,1000)
                render();
                return;
            } else {
                render();
                return;
            }
        } else {
            attack(attempt + 1);
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
                    square.classList.add('orange');
                } else {
                    square.innerHTML = player.gameboard.gameboard[i][j];
                    setTimeout(playerGameboard.attack,1000);
                    playerGameboard.render()
                }
            })
        }
    }
    box.append(container);
}

const modal = (loser) => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const newGameBtn = document.querySelector(".btn");
    newGameBtn.addEventListener('click', () => {
        closeModal()
    })


    function openModal() {
        const winMassage = document.querySelector('.win');
        winMassage.textContent = `${loser} lost!`
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };
    
    function closeModal() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        location.reload()
    };

    return {openModal}
}




export {
    renderPlayerGameboard,
    renderCompGameboard,
    modal
}