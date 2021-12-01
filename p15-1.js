let sn = ([1, 0, 18, 10, 19, 6]),
  fin = 10;



function last2Occ(arr, val) {
  let nums = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (nums.length == 2) break;
    if (arr[i] == val) {
      nums.push(i + 1);
    }
  }
  return nums;
}

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}

let total = 2020 - sn.length;
for (let i = 0; i < total; i++) {
  if (getOccurrence(sn, sn[sn.length - 1]) == 1) {
    sn.push(0);
  } else {
    let last = last2Occ(sn, sn[sn.length - 1]);
    sn.push(last[0] - last[1]);
  }
  // if (i % 1000 == 0)
  // console.log(i, sn[sn.length - 1]);
}

console.log(sn);