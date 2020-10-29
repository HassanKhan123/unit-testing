let expect = require('chai').expect

function titleCase(title){
    let words = title.split(' ')
    let titleCasedWords = words.map(word => word[0].toUpperCase() + word.substring(1))
    return titleCasedWords.join(' ')
}
expect(titleCase('a great detective')).to.be.a('string')
expect(titleCase('a')).to.equal('A')
expect(titleCase('vertigo')).to.equal('Vertigo')



expect(titleCase('the great detective')).to.equal('The Great Detective')
