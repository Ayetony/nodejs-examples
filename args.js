function add() {
  let sum = 0;
  for (let i = 0, max = arguments.length; i < max; i++) {
    sum += arguments[i];
  }
  console.log(sum);
  return sum;
}

add(1, 2, 3);
