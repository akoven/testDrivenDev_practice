
function myMap(inputArray, callback) {
  let newArr = [];
  for (let el of inputArray) {
    newArr.push(callback(el));
  }

  return newArr;
}

let calling = (num) => {
  return num *= 2
}

console.log(myMap([1,2,3],calling))
// console.log(myMap((myArr), calling))
module.exports = { myMap };
