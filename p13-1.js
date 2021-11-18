let minTS = 1000186,
    buses = "17,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,907,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,x,x,x,x,x,x,x,23,x,x,x,x,x,29,x,653,x,x,x,x,x,x,x,x,x,41,x,x,13";

let least = {
  'timestamp' : Number.MAX_VALUE,
  'bus' : 0
};
buses.split(',').forEach(val => {
  if(val == 'x') return;
  else {
    // console.log(checkNext(Number(val)));
    if(checkNext(Number(val)) < least.timestamp) {
      least.timestamp = checkNext(Number(val));
      least.bus = Number(val)
    }
  }
})

console.log(least);
console.log((least.timestamp - minTS) * least.bus);

function checkNext(num) {
  if(minTS % num == 0) return minTS;
  else return minTS + (num - (minTS % num));
}
