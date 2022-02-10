const chai = require('chai')
const expect = chai.expect
const { Person } = require('../problems/person')


describe('Person', function () {
    let newPerson;
    beforeEach(() => {
        newPerson = new Person({ name: 'ali', age: '38' })
        describe('sayHello', function () {

            it('should return a string of the Person instance"s name and a greeting message', function () {
                expect.fail()
            })
        })
    })
})
        // describe('switchVisit', function () {
        //     it('should return a string stating that this instance visited the passed-in person instance', function () {
        //         expect.fail()
        //     })
        // })
        // describe('update(obj)', function () {
        //     it('should return a string stating that this instance visited the passed-in person instance', function () {
        //         expect.fail()
        //     })
        // })
        // describe('tryUpdate', function () {
        //     it('should return a string stating that this instance visited the passed-in person instance', function () {
        //         expect.fail()
        //     })
        // })
        // describe('greetAll', function () {
        //     it('should return a string stating that this instance visited the passed-in person instance', function () {
        //         expect.fail()
        //     })
        // })

    // })