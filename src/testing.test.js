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

    test('with two hits', () => {
        twoDeckShip.hit();
        twoDeckShip.hit();
        expect(twoDeckShip.isSunk()).toBe(true)
    })
})

describe('gameboard factory test', () => {
    const newBoard = Gameboard.gameboard;
    test
})