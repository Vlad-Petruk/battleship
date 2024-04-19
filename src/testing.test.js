import { Ship, Gameboard } from "./factories"

describe('ship factory test', () => {
    const twoDeckShip = Ship(2)
    test('initial check if sunk',() => {
        expect(twoDeckShip.isSunk()).toBe(false)
    })

    test('with one hit', () => {
        twoDeckShip.hit();
        expect(twoDeckShip.isSunk()).toBe(false)
    })

    test('if updates hits', ()=>{
        expect(twoDeckShip.getHits()).toBe(1);
    })

    test('with two hits', () => {
        twoDeckShip.hit();
        twoDeckShip.hit();
        expect(twoDeckShip.isSunk()).toBe(true)
    })
})

describe('gameboard factory test', () => {
    const myShip = Ship(3)
    const newBoard = Gameboard()
    newBoard.placeShip(0,0, myShip, 'vertical');
    newBoard.receiveAttack(0,0)
    test('hits after succsessfull receive attack', () => {
        expect(myShip.g).toBe(2)
    })
})