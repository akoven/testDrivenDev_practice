const { expect } = require('chai');
const { myMap } = require('../problems/my-map')

describe('myMap', function () {
    it('should multiply every element by 2 and return new array', function () {
        let myArr = [1, 2, 3]
        let callback = function (num) {
            num * 2
        }
        expect(myMap(myArr), callback()).to.equal([2, 4, 6])
    })
})