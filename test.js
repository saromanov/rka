var assert = require('assert');
var rka = require('./lib/rka');

var str = "abcde";
describe('Test substring contains in the string', function() {
    it('should return index from starts of substring1', function() {
       assert.equal(rka(str, "abcd"), 0); 
    });

    it('should return index from starts of substring2', function(){
        assert.equal(rka(str, "ab"), 0); 
    });

    it('should return index from starts position of substring3', function(){
        assert.equal(rka(str, "abc"), 0); 
    });

    it('should return index from 1th position of substring2', function(){
        assert.equal(rka(str, "bcd"), 1); 
    });

    it('should return index from 1th position of substring2', function(){
        assert.equal(rka(str, "b"), 1); 
    });

    it('should return index from 2th position of substring2', function(){
        assert.equal(rka(str, "cd"), 2); 
    });

    it('should return index from 2th position of substring2', function(){
        assert.equal(rka(str, "cde"), 2); 
    });

    it('should return index from 3th position of substring2', function(){
        assert.equal(rka(str, "de"), 3); 
    });

    it('should return index from 3th position of substring2', function(){
        assert.equal(rka(str, "d"), 3); 
    });

    it('should return index from last position of substring2', function(){
        assert.equal(rka(str, "e"), 4); 
    });
});

describe('Test substring not cointains in the string', function(){
    it('should return -1', function(){
        assert.equal(rka(str, "abe"), -1);
    });

    it('should return -1', function(){
        assert.equal(rka(str, "gfdgdfgdfgd"), -1);
    });

    it('should return -1', function(){
        assert.equal(rka(str, "efg"), -1);
    });

    it('should return -1', function(){
        assert.equal(rka(str, "aaa"), -1);
    });

});
