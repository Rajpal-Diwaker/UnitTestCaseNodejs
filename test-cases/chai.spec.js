const chai =require('chai')
const assert=chai.assert;
const should =chai.should();
const expect=chai.expect;



// ##### Asserts #########
describe('------------Aspect Check------------', () => { 
    
    let userName='rajpal'
    let mylist={
        item:[{
            id:1,name:"name"
        }],
        title:"title"
    }
    it('check string',()=>{
        assert.typeOf(userName,'string')
    })

    it('equal match',()=>{
        assert.equal(userName,'rajpal')
    })

    it('length match',()=>{
        assert.lengthOf(mylist.item,1)
    })
 })


//  ###### SHOULD USE #######
describe('---------should check-----------', () => { 
    let userName='rajpal'
    let mylist={
        item:[{
            id:1,name:"name"
        }],
        title:"title"
    }
    it('check string',()=>{
       userName.should.be.a('string')
    })

    it('Equal check',()=>{
        userName.should.equal('rajpal')
     })

    it('length check',()=>{
        mylist.should.have.property('item').with.lengthOf(1);
     })
 })


 //  ###### Expect USE #######
describe('---------expect check-----------', () => { 
    let userName='rajpal'
    let mylist={
        item:[{
            id:1,name:"name"
        }],
        title:"title"
    }
    it('check string',()=>{
       expect(userName).to.be.a('string')
    })

    it('Equal check',()=>{
        expect(userName).to.equal('rajpal')
     })

    it('length check',()=>{
        expect(userName).to.lengthOf(6);
     })

     it('Object match',()=>{
        expect(mylist).to.have.property('item').with.lengthOf(1)
     })

     it('api Object match',()=>{
        expect(mylist).to.have.all.key('item','title');
     })
 })