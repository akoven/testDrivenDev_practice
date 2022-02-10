const chai  = require('chai');
const expect = chai.expect;
const { myMap } = require('../problems/my-map')

describe('myMap', function () {
    let calling;
    beforeEach(() => {
        calling = (num) => num*2
    })
    it('should multiply every element by 2 and return new array', function (){
        expect(myMap([1,2,3], calling)).to.eql([2, 4, 6])//we need deep equal here(.eql)
    })
})
