let sn = [1, 0, 18, 10, 19, 6],
  obj = {};

sn.forEach((val, index) => {
  pushValInObj(val, index)
})

function pushValInObj(val, index) {
  // console.log(val, index);
  if (obj[val] != undefined || obj[val] == []) {
    obj[val].push(index + 1);
  } else {
    obj[val] = [index + 1]
  }
}

// console.log(obj);

for (let i = sn.length - 1; i <= 30000000; i++) {
  if (obj[sn[i]] && obj[sn[i]].length >= 2) {
    let next = obj[sn[i]][obj[sn[i]].length - 1] - obj[sn[i]][obj[sn[i]].length - 2]
    sn.push(next)
    pushValInObj(next, i + 1);
  } else {
    sn.push(0);
    pushValInObj(0, i + 1);
  }

  if (i % 10000000 == 0) console.log(sn[sn.length - 1]);
}

console.log(sn[sn.length - 3]);