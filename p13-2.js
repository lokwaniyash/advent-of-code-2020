let buses = "17,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,907,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,x,x,x,x,x,x,x,23,x,x,x,x,x,29,x,653,x,x,x,x,x,x,x,x,x,41,x,x,13"
// let tA = 0, tB = 0, tC = 0;

// tA = findPatt(1);
// console.log('a');
// // tB = leastCommonMultiple(buses);
// console.log('a');
// tC = findPatt(tA + 1);
// console.log('a');
//
// console.log(tA, tB, tC);

// let i = 0;
// let last = 1;
// while(true) {
//   let n = findPatt(last + 1);
//   console.log(n, n - last);
//   last = n;
//
//   if(i == 5) return;
//   i++
// }

function leastCommonMultiple(arr) {
    arr = busArrtoNums(arr);

    let min = Math.min(...arr),
      max = Math.max(...arr);

    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });

    return multiple;
}

function findPatt(index) {
  let i = index;
  // console.log(i);
  while(true) {
    let flag = true;
    for(let j = 0; j < buses.split(',').length; j++) {
      num = buses.split(',')[j] == 'x' ? 1 : Number(buses.split(',')[j]);
      // console.log(i, j, num);
      if((i + j) % num != 0) {
        flag = false;
        break;
      }
    }
    if(flag) {
      // console.log(i);
      break;
    }
    i++;
  }

  return i;
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function busArrtoNums(array) {
  let arr = [];
  let curr = array.split(',');
  for(let i = 0; i < curr.length; i++) {
    if(curr[i] != 'x') arr.push(Number(curr[i]));
    else arr.push(1);
  }
  return arr;
}

function multAll(arr) {
  let total = 1;
  arr = busArrtoNums(arr);
  for(let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
}

function findMinX(num , rem , k) {
    var x = 1; // Initialize result

    // As per the Chinese remainder theorem,
    // this loop will always break.
    while (true)
    {
        // Check if remainder of x % num[j] is
        // rem[j] or not (for all j from 0 to k-1)
        var j;
        for (j=0; j<k; j++ )
            if (x%num[j] != rem[j])
               break;

        // If all remainders matched, we found x
        if (j == k)
            return x;

        // Else try next number
        x++;
        // console.log(x, j);
    }

}

function decreaseMod(num, by) {
  console.log(num, by);
  let temp = num;
  for(let i = 0; i < by; i++) {
    if(num == 0) {
      num = temp;
      continue;
    }
    num--;
  }
  return num;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

// Driver method
var num = [];
var rem = [];

for(let i = 0; i < buses.split(',').length; i++) {
  if(buses.split(',')[i] != 'x') {
    num.push(Number(buses.split(',')[i]));
    console.log((Number(buses.split(',')[i]) - i) % Number(buses.split(',')[i]), mod(Number(buses.split(',')[i]), i));
    rem.push(mod((Number(buses.split(',')[i]) - i) , Number(buses.split(',')[i])));
  }
  console.log(num, rem);
}

var k = num.length;
console.log(findMinX(num, rem, k));
