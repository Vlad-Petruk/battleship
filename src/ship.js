const Ship = (shipLength) => {
  const length = shipLength;
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    if (shipLength <= hits) {
      return true;
    } else return false;
  }

  return {
    hit,
    isSunk,
    length,
    getHits: () => hits,
  };
};

export { Ship };
