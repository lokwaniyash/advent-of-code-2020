let jolts = [
  "178",
  "135",
  "78",
  "181",
  "137",
  "16",
  "74",
  "11",
  "142",
  "109",
  "148",
  "108",
  "151",
  "184",
  "121",
  "58",
  "110",
  "52",
  "169",
  "128",
  "2",
  "119",
  "38",
  "136",
  "25",
  "26",
  "73",
  "157",
  "153",
  "7",
  "19",
  "160",
  "4",
  "80",
  "10",
  "51",
  "1",
  "131",
  "55",
  "86",
  "87",
  "21",
  "46",
  "88",
  "173",
  "71",
  "64",
  "114",
  "120",
  "167",
  "172",
  "145",
  "130",
  "33",
  "20",
  "190",
  "35",
  "79",
  "162",
  "122",
  "98",
  "177",
  "179",
  "68",
  "48",
  "118",
  "125",
  "192",
  "174",
  "99",
  "152",
  "3",
  "89",
  "105",
  "180",
  "191",
  "61",
  "13",
  "90",
  "129",
  "47",
  "138",
  "67",
  "115",
  "44",
  "59",
  "60",
  "95",
  "93",
  "166",
  "154",
  "101",
  "34",
  "113",
  "139",
  "77",
  "94",
  "161",
  "187",
  "45",
  "22",
  "12",
  "163",
  "41",
  "27",
  "132",
  "30",
  "143",
  "168",
  "144",
  "83",
  "100",
  "102",
  "72",
];

class Node {
  children = [];
  value = "";

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
  three = 1;

for (let i = 1; i < jolts.length; i++) {
  if (jolts[i] - last == 1) {
    one++;
    last = jolts[i];
  } else if (jolts[i] - last == 2) {
    last = jolts[i];
  } else if (jolts[i] - last == 3) {
    three++;
    last = jolts[i];
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

let node = new Node(jolts[0]);
node.addVal(joltTree(node));

function joltTree(node) {
  console.log(node.value);
  for (let i = 0; i < jolts.length; i++) {
    if (jolts[(j = i)] - node.value >= 1 && jolts[i] - node.value <= 3) {
      let child = new Node(jolts[j]);
      child.addVal(joltTree(child));
    }
  }
  return node;
}

console.log(one, three);

console.log(node);
