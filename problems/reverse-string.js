module.exports = function reverseString(string) {
  let arr = string.split('')
  let revString = arr.reverse();
  return revString.join('');
};

// let word = 'water'
// reverseString(word);

// module.exports = reverseString;
