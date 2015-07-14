var assert = require('assert');
var rka = require('./lib/rka');

var str = "abcdefgh";
describe('Test substring contains string', function() {
    it('should return index from starts of substring1', function() {
       assert.equal(rka(str, "abcd"), 0); 
    });

    it('should return index from starts of substring2', function(){
        assert.equal(rka(str, "ab"), 0); 
    });

    it('should return index from starts of substring3', function(){
        assert.equal(rka(str, "ac"), 0); 
    });

    it('should return index from second of substring2', function(){
        assert.equal(rka(str, "bcd"), 1); 
    });

});
