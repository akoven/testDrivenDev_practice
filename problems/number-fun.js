function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new TypeError('Your number must be between 1 and 10^6')
  }
  return 1 / n;
}

try {
  reciprocal(5)
  reciprocal(50)
  reciprocal(1000001)
} catch (error) {
  console.error(error.name, error.message)
}

console.log(reciprocal(1000001))
module.exports = {
  returnsThree,
  reciprocal
};
