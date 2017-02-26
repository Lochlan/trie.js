const expect = require('chai').expect;
const Trie = require('../trie.js');

describe('when instantiating a Trie', function () {
    let trie = null;

    beforeEach(function () {
        trie = new Trie();
    });

    it('should instantiate', function () {
        expect(trie).to.not.be.null;
    });

    describe('when inserting "bar"', function () {
        beforeEach(function () {
            trie.insert('bar');
        });

        describe('when looking up "bar"', function () {
            let lookupResult = null;

            beforeEach(function () {
                lookupResult = trie.lookUp('bar');
            });

            it('should return true', function () {
                expect(lookupResult).to.be.true;
            });
        });

        describe('when looking up "ba"', function () {
            let lookupResult = null;

            beforeEach(function () {
                lookupResult = trie.lookUp('ba');
            });

            it('should return false', function () {
                expect(lookupResult).to.be.false;
            });
        });

        describe('when inserting "ba"', function () {
            beforeEach(function () {
                trie.insert('ba');
            });

            describe('when looking up "ba"', function () {
                let lookupResult = null;

                beforeEach(function () {
                    lookupResult = trie.lookUp('ba');
                });

                it('should return true', function () {
                    expect(lookupResult).to.be.true;
                });
            });
        });
    });
});
