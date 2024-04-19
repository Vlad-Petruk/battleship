const Ship = (length) => {
    const shipLength = length;
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
        isSunk
    }
}

export { Ship }