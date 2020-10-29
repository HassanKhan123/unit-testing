let expect = require('chai').expect

expect(true).to.be.true;

function titleCase(title){
    return title
}
expect(titleCase('a great detective')).to.be.a('string')