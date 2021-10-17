let set = [
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

function checkForFourOcc(i, j, set) {
  if (set[i][j] != "#") return true;
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
      //   // i + row >= 0 &&
      //   //   i + row < set.length &&
      //   //   j + col >= 0 &&
      //   //   j + col < set[i].length
      // );
    }
  }

  return occ < 4 ? true : false;
}

function printSet() {
  for (str of set) {
    console.log(str);
  }
}

// Rule 1

for (let i = 0; i < set.length; i++) {
  for (let j = 0; j < set[i].length; j++) {
    if (set[i][j] == "L") {
      let str = set[i].split("");
      str[j] = "#";
      set[i] = str.join("");
    }
  }
}

printSet();
console.log(
  "-----------------------------------------------------------------"
);

// Rule 2
let tempSet = set.slice(0);
for (let i = 0; i < tempSet.length; i++) {
  for (let j = 0; j < tempSet[i].length; j++) {
    // if (set[i][j] == "L") {
    let str = set[i].slice(0);
    str = str.split("");
    if (!checkForFourOcc(i, j, tempSet)) {
      str[j] = "L";
      // console.log(i, j, str);
    }
    // str[j] = "#";
    set[i] = str.join("");
    // console.log(set);
    // }
  }
}

printSet();
