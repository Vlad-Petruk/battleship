const Ship = (length) => {
    const shipLength = length;
    const hits = 0;

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