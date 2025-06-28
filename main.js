function knightMoves(start, end) {
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const isValid = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

  const queue = [];
  queue.push({ pos: start, path: [start] });

  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const current = queue.shift();
    const [x, y] = current.pos;

    if (x === end[0] && y === end[1]) {
      console.log(
        `You made it in ${current.path.length - 1} moves! Here's your path:`
      );
      current.path.forEach((step) => console.log(step));
      return current.path;
    }

    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      const next = [newX, newY];

      if (isValid(newX, newY) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push({ pos: next, path: [...current.path, next] });
      }
    }
  }
}

knightMoves([0, 0], [1, 2]);
// Output: You made it in 1 moves! Here's your path: [0,0] [1,2]

knightMoves([0, 0], [3, 3]);
// Output: You made it in 2 moves! Path like: [0,0] [1,2] [3,3]

knightMoves([0, 0], [7, 7]);
// Output: You made it in 6 moves! Path varies, but shortest is guaranteed.
