// const chai = require("chai");
// const expect = chai.expect;
const {expect} = require('chai')

const {returnsThree, reciprocal} = require('../problems/number-fun')

describe('returnsThree',function(){
    it('should equal 3',function(){
        expect(returnsThree()).to.equal(3)
    })
})

describe('reciprocal',function(){
    it('should be the reciprocal of the given number', function(){
        expect(reciprocal(4)).to.equal(1/4)
    })
})
