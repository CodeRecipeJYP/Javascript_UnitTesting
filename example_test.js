var expect = require('chai').expect;

function plus(a, b) {


    return a + b;
}

describe('Plus method:', function () {

    it('plus(number, number) return number type', function () {
        expect(plus(1, 2)).to.be.a('number');
    });

    it('plus(number, number) return added number', function () {
        expect(plus(1, 2)).to.equal(3);
    });

    it('plus(string, string) return string type', function () {
        expect(plus("1", "2")).to.be.a('string');
    });

    it('plus(string, string) return concatenated string', function () {
        expect(plus("1", "2")).to.equal("12");
    });
});