const printTree = require("print-tree");
let jolts = [
  178, 135, 78, 181, 137, 16, 74, 11, 142, 109, 148, 108, 151, 184, 121, 58,
  110, 52, 169, 128, 2, 119, 38, 136, 25, 26, 73, 157, 153, 7, 19, 160, 4, 80,
  10, 51, 1, 131, 55, 86, 87, 21, 46, 88, 173, 71, 64, 114, 120, 167, 172, 145,
  130, 33, 20, 190, 35, 79, 162, 122, 98, 177, 179, 68, 48, 118, 125, 192, 174,
  99, 152, 3, 89, 105, 180, 191, 61, 13, 90, 129, 47, 138, 67, 115, 44, 59, 60,
  95, 93, 166, 154, 101, 34, 113, 139, 77, 94, 161, 187, 45, 22, 12, 163, 41,
  27, 132, 30, 143, 168, 144, 83, 100, 102, 72, 0, 195,
];
let diffStr = "";

class Node {
  value = "";
  children = [];

  constructor(val) {
    this.value = val;
  }

  addArr(valueArr) {
    this.children = valueArr;
  }

  addVal(value) {
    this.children.push(value);
  }

  // get value() {
  //   return this.value;
  // }
}

// sorting of jolt adapters

for (let i = 0; i < jolts.length; i++) {
  for (let j = i; j < jolts.length; j++) {
    if (Number(jolts[i]) > Number(jolts[j])) {
      let temp = Number(jolts[i]);
      jolts[i] = Number(jolts[j]);
      jolts[j] = temp;
    }
  }
}

// console.log(jolts)

let last = jolts[0];
let one = 1,
  two = 1,
  three = 1;

for (let i = 1; i < jolts.length; i++) {
  if (jolts[i] - last == 1) {
    one++;
    last = jolts[i];
    diffStr += "1";
  } else if (jolts[i] - last == 2) {
    two++;
    last = jolts[i];
    diffStr += "2";
  } else if (jolts[i] - last == 3) {
    three++;
    last = jolts[i];
    diffStr += "3";
  }
}

// for (let i = 0; i < jolts.length; i++) {
//   let node = new Node(jolts[i]);
//   for (let j = i + 1; j < jolts.length; j++) {
//     if (jolts[j] - node.value >= 1 && jolts[j] - node.value <= 3) {
//       node.addVal(new Node(jolts[j]));
//     }
//   }
// }

// let allPaths = 0;
// let allFinalPaths = 0;
// // joltTree(0);
// let node = joltTree(new Node(jolts[0]));
// printTree(
//   node,
//   (node) => node.value + "",
//   (node) => node.children
// );

// console.log(allPaths);
console.log(last);
// // console.log(allFinalPaths);

// function joltTree(node) {
//   // console.log(node.value);
//   if (node.value == last) {
//     // console.log("found it");
//     allPaths++;
//   }
//   for (let i = 0; i < jolts.length; i++) {
//     if (jolts[i] - node.value >= 1 && jolts[i] - node.value <= 3) {
//       let child = new Node(jolts[i]);
//       node.addVal(joltTree(child));
//       // joltTree(child);
//       // console.log(jolts[i]);
//       // if (jolts[i] == last) allPaths++;
//       // joltTree(jolts[i]);
//     }
//   }
//   // console.log(node.value == last, last);
//   // allFinalPaths++;
//   return node;
// }

console.log(one, two, three);
console.log(diffStr);

function findRepetitions(str, n, char, surr = false) {
  let total = 0;
  let found = 0;
  let s = 0,
    e = 0,
    started = false;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1] && str[i] == char) {
      found++;
      // console.log(i, str[i], "match");
      if (!started) {
        started = true;
        s = i;
      }
    } else {
      (s = 0), (e = 0), (started = false);
      found = 0;
    }

    if (found + 1 == n) {
      found = 0;
      started = false;
      e = i + 1;
      // console.log(i, str[i], "total", str[s - 1], str[e + 1], s, e);

      if (surr) {
        if (
          s != 0 &&
          str[s - 1] == "3" &&
          e != str.length - 1 &&
          str[e + 1] == 3
        ) {
          total++;
        }
      } else {
        total++;
      }
      i++;
    }
  }
  return total;
}

// console.log(findRepetitions(diffStr, 2, "1", true));

let a = findRepetitions(diffStr, 4, "1"),
  b = findRepetitions(diffStr, 3, "1", true),
  c = findRepetitions(diffStr, 2, "1", true);

console.log(7 ** a, 4 ** b, 2 ** c, 7 ** a * 4 ** b * 2 ** c, a, b, c);

// for (let i = 0; i < node.children.length; i++) {
//   console.log(i, node.children[i]);
// }
