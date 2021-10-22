let seats = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL",
];

function checkAdjacent(i, j, set, amount, current, moreThan = false) {
  if (set[i][j] != current) return true;
  let occ = 0;

  let check = [
    //i---j
    //|---|
    // Top Left
    [-1, -1],
    // Left
    [0, -1],
    // Bottom Left
    [1, -1],
    // Bottom
    [1, 0],
    // Bottom Right
    [1, 1],
    // Right
    [0, 1],
    // Top Right
    [-1, 1],
    // Top
    [-1, 0],
  ];

  for (let k = 0; k < check.length; k++) {
    let row = check[k][0];
    let col = check[k][1];

    if (
      i + row >= 0 &&
      i + row < set.length &&
      j + col >= 0 &&
      j + col < set[i].length &&
      // (set[i + row][j + col] == "#" || set[i + row][j + col] == ".")
      tempSet[i + row][j + col] == "#"
    ) {
      occ++;
      // console.log(
      //   i + row,
      //   j + col,
      //   i,
      //   j,
      //   row,
      //   col,
      //   occ
      // );
    }
  }

  let result = moreThan ? occ > amount : occ < amount;

  // console.log(result, i, j, occ, amount);
  return result;
}

function nextInSight(i, j, di, dj) {
  let reali = i,
    realj = j;
  while (true) {
    let seati = i + di;
    let seatj = j + dj;
    if (
      seati < 0 ||
      seati >= seats.length ||
      seatj < 0 ||
      seatj >= seats[seati].length
    ) {
      return [reali, realj];
    }

    if (seats[seati][seatj] == "#" || seats[seati][seatj] == "L") {
      return [seati, seatj];
    }

    i = seati;
    j = seatj;
  }
}

console.log(nextInSight(6, 4, 0, 1));
