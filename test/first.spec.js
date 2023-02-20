let assert =require('assert')
describe('Array', () => { 
    describe('#inboxof()',()=>{
        it('should return -1 when the value is not present',()=>{
            assert.equal([1,2,3].indexOf(4),-1)
        })
    })
 })


 describe('Unit Test start',()=>{
     it('value check',()=>{
         assert.equal([1,2,3].indexOf(3),2)
     })
     it('value check 2',()=>{
        assert.equal([1,2,3].indexOf(2),1)
     }) 
    })