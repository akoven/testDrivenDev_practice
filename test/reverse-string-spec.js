const {expect} = require('chai');
const reverseString = require('../problems/reverse-string')

describe('reverseString',function(){
    it('should reverse the word', function(){
        // expect.fail();
        expect(reverseString('fun')).to.equal('nuf');
    })
})
