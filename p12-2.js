let dirList = ["N4", "F85", "L90", "N4", "E3", "L90", "E1", "L90", "W4", "R270", "S5", "F54", "N5", "W4", "L90", "N1", "F55", "L90", "S2", "N2", "L180", "F97", "W1", "F55", "N1", "L180", "F45", "F49", "L90", "F76", "R90", "S3", "F35", "N3", "W1", "S4", "R90", "S4", "F83", "L90", "S1", "F41", "S2", "R90", "F98", "N5", "F51", "L90", "N4", "W1", "F73", "W5", "F34", "S3", "R180", "F85", "N1", "F74", "W4", "F97", "L270", "F65", "W5", "R90", "S1", "W5", "L90", "W2", "N4", "N1", "F81", "S3", "L270", "F96", "W2", "F39", "F27", "W4", "L180", "F75", "N4", "W2", "F38", "R90", "W4", "F100", "R180", "E5", "R180", "E5", "R90", "S5", "L90", "F17", "W3", "N5", "F9", "N1", "W4", "F80", "S1", "W4", "F50", "R180", "W4", "L90", "E4", "F78", "N3", "F86", "W2", "R90", "F46", "S3", "W5", "L180", "S1", "L90", "L90", "F54", "R90", "N5", "E5", "F83", "S4", "W3", "R180", "E4", "N5", "E5", "F90", "W1", "S3", "W5", "F91", "L90", "N1", "F22", "E4", "S2", "F65", "R90", "F16", "R90", "E4", "R180", "W3", "R90", "F94", "L180", "F2", "W1", "R180", "N1", "F59", "R270", "E2", "R90", "S3", "S3", "R90", "F52", "N2", "L90", "R90", "E5", "L90", "R180", "S3", "F26", "E4", "S1", "W5", "R90", "E5", "F69", "E2", "L90", "S2", "E3", "S5", "W2", "S3", "W3", "F78", "N5", "E5", "F87", "L90", "W5", "S1", "L90", "F21", "L90", "F80", "W2", "N4", "W2", "L270", "F52", "L90", "R90", "N3", "F29", "L90", "F20", "R90", "W1", "R90", "E1", "F100", "W1", "S4", "E3", "S3", "F73", "S4", "L90", "S5", "W4", "R180", "E4", "F32", "S1", "R270", "E4", "S5", "L90", "F64", "F12", "E5", "F59", "E4", "F85", "N2", "F27", "R90", "W4", "N2", "F7", "N2", "E3", "F70", "W1", "R180", "F50", "R270", "F43", "L90", "E3", "F23", "W4", "N2", "F15", "L180", "N4", "F31", "R90", "F35", "N1", "E2", "S4", "E4", "N1", "F98", "S2", "W5", "N5", "R90", "F59", "W2", "F22", "S1", "S4", "W5", "F10", "L90", "E3", "R90", "W4", "F11", "N3", "L90", "F12", "S1", "R90", "F25", "E3", "E1", "R90", "F66", "S5", "E1", "F33", "W1", "F57", "L90", "N4", "F44", "W4", "L90", "N5", "L270", "F25", "S3", "F20", "L180", "E4", "R90", "F49", "E4", "S1", "F96", "W2", "R90", "F26", "L180", "F78", "L180", "F88", "W2", "N4", "E1", "F12", "E4", "F81", "E1", "F97", "S3", "E2", "F21", "R180", "S4", "E1", "S4", "E5", "R90", "E4", "S2", "S1", "L90", "L90", "W1", "S5", "L180", "S2", "W2", "S2", "E5", "N5", "W5", "F57", "R270", "N1", "W3", "N5", "F47", "R180", "F28", "S1", "E1", "L180", "F34", "N1", "F96", "S5", "W2", "L90", "S5", "F48", "L90", "E4", "S5", "F24", "L90", "F95", "W1", "R180", "E2", "F76", "R90", "N1", "F51", "S3", "E4", "F24", "S2", "E5", "R90", "E1", "R90", "S4", "E3", "F70", "S1", "E4", "F43", "R180", "F84", "E2", "R90", "F70", "E1", "R90", "F85", "E2", "L90", "F29", "S4", "F73", "F25", "S5", "R180", "S2", "F66", "S3", "F5", "F52", "N3", "L180", "E5", "F14", "W5", "S5", "F81", "N4", "F67", "E3", "R180", "S1", "W4", "F96", "F100", "L270", "F65", "R90", "W2", "S5", "E3", "F32", "F61", "L180", "F57", "N2", "L90", "F10", "F57", "N2", "R90", "F34", "E5", "F13", "E3", "N2", "L90", "N2", "F68", "N3", "W1", "F49", "L90", "F91", "E3", "F84", "F73", "L90", "S1", "E3", "S4", "F66", "L90", "N3", "E2", "S1", "L180", "S5", "L90", "S4", "E4", "S1", "L180", "R90", "S2", "W4", "F59", "L90", "F6", "R90", "W2", "S5", "R180", "S1", "S2", "F96", "W1", "R180", "F87", "R90", "F67", "W5", "L270", "E4", "F51", "R180", "S4", "L90", "F59", "E5", "F66", "E2", "S1", "E4", "F79", "S1", "L180", "F41", "R270", "F66", "L90", "F90", "E4", "S2", "R180", "W2", "F4", "L90", "S5", "L90", "F18", "L90", "F90", "R90", "N4", "E5", "R90", "E4", "S2", "W3", "F97", "W4", "F53", "L90", "S5", "F61", "S2", "F72", "E4", "R90", "S2", "R90", "S2", "F56", "W2", "R180", "W3", "L90", "F31", "F65", "S2", "F11", "N5", "W4", "L270", "E2", "N4", "L90", "F90", "L90", "N3", "L90", "E3", "L90", "F8", "S2", "F63", "L270", "E4", "F51", "F40", "L90", "F34", "W1", "L180", "F79", "N5", "R90", "L90", "W3", "L180", "W1", "L180", "E1", "R90", "N2", "E5", "S1", "R90", "E3", "S2", "E2", "F56", "S2", "W3", "F95", "R90", "N4", "R270", "W4", "S5", "F33", "L180", "N3", "F95", "N1", "E2", "S3", "F4", "L90", "F66", "S1", "R90", "E2", "S3", "F11", "R90", "S5", "N1", "E2", "F64", "N2", "W5", "S2", "F2", "N1", "R90", "N4", "L180", "N1", "F95", "W5", "F99", "F6", "N4", "F69", "S2", "E4", "F49", "R90", "F91", "F76", "R90", "S1", "E2", "S3", "F79", "W4", "L90", "F18", "S5", "R90", "E4", "S1", "F91", "N3", "F40", "E2", "L90", "W2", "S4", "R90", "S1", "R90", "F59", "W3", "N2", "W1", "F86", "R90", "F32", "S1", "F22", "S2", "F4", "S3", "E5", "S4", "S4", "E5", "S4", "F36", "E4", "L90", "F35", "L180", "N1", "W1", "L90", "N4", "R180", "R90", "F22", "R180", "E2", "S2", "W5", "F99", "E2", "S3", "F22", "E1", "L180", "S2", "L180", "W4", "R270", "F26", "N5", "E2", "F89", "E5", "L90", "N4", "R90", "W4", "L270", "W5", "N5", "W4", "S2", "E3", "N4", "W1", "F95", "W1", "F10", "N3", "R90", "W1", "F73", "W1", "N3", "F33", "L180", "E3", "R90", "R90", "N2", "E4", "E5", "W4", "N1", "F91", "N1", "W1", "F49", "S2", "E5", "S3", "F43", "W5", "F34", "E3", "E1", "N1", "E3", "L180", "W2", "F27", "L180", "E5", "F28", "R90", "W1", "L90", "F99", "S2", "F48", "W1", "W1", "R180", "W1", "L180", "F35"];
let shipDirs = {
  "W": 0,
  "N": 0,
  "E": 0,
  "S": 0
};
let wayDirs = {
  "W": 0,
  "N": 1,
  "E": 10,
  "S": 0
};
let current = 2;

function changeDir(amount) {
  //right
  if(amount > 0) {
    for(let i = 0; i < amount; i++) {
      rotateWayDirs(1);
    }

  //left
  } else if(amount < 0) {
    for(let i = amount; i < 0; i++) {
      rotateWayDirs(0);
    }
  }
}

function rotateWayDirs(dir) {
  // left rotation
  if(dir == 0) {
    let temp = wayDirs[Object.keys(wayDirs)[0]];
    for(let i = 0; i < Object.keys(wayDirs).length - 1; i++) {
      wayDirs[Object.keys(wayDirs)[i]] = wayDirs[Object.keys(wayDirs)[i + 1]];
    }
    wayDirs[Object.keys(wayDirs)[Object.keys(wayDirs).length - 1]] = temp;
  }

  // right rotation
  if(dir == 1) {
    let temp = wayDirs[Object.keys(wayDirs)[Object.keys(wayDirs).length - 1]];
    for(let i = Object.keys(wayDirs).length - 1; i > 0; i--) {
      wayDirs[Object.keys(wayDirs)[i]] = wayDirs[Object.keys(wayDirs)[i - 1]];
    }
    wayDirs[Object.keys(wayDirs)[0]] = temp;
  }
}

function oppDir(dir) {
  if(dir == "W") return "E";
  if(dir == "E") return "W";
  if(dir == "N") return "S";
  if(dir == "S") return "N";
}

function go(dir, amount, obj) {
  obj[dir] += ((amount - obj[oppDir(dir)]) < 0 ? 0 : (amount - obj[oppDir(dir)]));
  // console.log(obj, amount, obj[oppDir(dir)], oppDir(dir));
  obj[oppDir(dir)] = (obj[oppDir(dir)] > amount ? obj[oppDir(dir)] - amount : 0);
  return obj;
}

for(let i = 0; i < dirList.length; i++) {
  let instr = dirList[i][0];
  let amount = Number(dirList[i].substr(1));

  if(instr == "F") {
    Object.keys(wayDirs).forEach((dir, index) => {
      // shipDirs[dir] += wayDirs[dir] * amount;
      shipDirs = go(dir, wayDirs[dir] * amount, shipDirs);
      // console.log(dir, index, amount, shipDirs[dir], Object.keys(wayDirs));
    });
  }

  if(instr == "R") {
    current = changeDir(amount / 90);
  } else if(instr == "L") {
    current = changeDir(-(amount / 90));
  } else if(instr == "W" || instr == "E" || instr == "N" || instr == "S") {
    wayDirs = go(instr, amount, wayDirs);
  }
  console.log(instr, amount, shipDirs, wayDirs);
}
//
// // console.log(shipDirs);
let sum = 0;
Object.keys(shipDirs).forEach(key => {
  sum += shipDirs[key];
});

console.log(sum);
