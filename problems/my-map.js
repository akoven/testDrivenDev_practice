function myMap(inputArray, callback) {
  // let newArr = [];
  // for (let el of inputArray) {
  //   newArr.push(callback(el))
  // }
  return inputArray.map(el => callback(el))
}
let calling = (num) => {
  return num * 2
}


// console.log(myMap((myArr), calling))
module.exports = { myMap };