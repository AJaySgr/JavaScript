const expect = require('chai').expect;
const assert = require('chai').assert;
var cal = require('./add');
const  Chef = require('./index');

var sum = require('./sum');

// describe('Chef test', function(){
//     let chef = Chef;

//     it("check this dish has valid name ",function(){
//         assert.isString(chef.checkMenu(),'string')
//     });

//     it("check for a dish in menu ",function(){
//         let dish = chef.checkMenu()
//         assert.oneOf(dish,chef.dishes)
//     });
// describe('Here the Addition',function(){

//     it("Addition of two number",function(){
//         let res=cal(4,5);
//         expect(res).to.equal(5);
//     })
// });

//Logic for sum

describe("#Sum()",function(){

    context('Without argument',function(){
        it('Should return 0',function(){
            expect(sum()).to.equal(0);
        })
    });

    context('With Number argument',function(){
        it('Should return sum of arguments',function(){
            expect(sum(1,2,3,4,5,6)).to.equal(15);
        })
        it('Should return argument when only one argument is passes',function(){
            expect(sum(5)).to.equal(5);
        })

    });
    context('with non-number arguments', function() {
        it('should throw error', function() {
          expect(function() {
            sum(1, 2, '3', [4], 5)
          }).to.throw(TypeError, 'sum() expects only numbers.')
        })
      });
})



