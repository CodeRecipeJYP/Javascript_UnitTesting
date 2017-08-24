var expect = require('chai').expect;

function titleCase(title) {
    return title;
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('the great mouse detective')).to.equal('The Greate Mouse Detective');
