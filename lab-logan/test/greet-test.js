'use strict';

const greet = require('../test/greet.js');
const assert = require('assert');

describe ('testing greet module', function(){
  it('should return hello world', function(){
    assert.equal(greet(), 'hello world');
  });
  it('should throw missing name error', function(){
    assert.throws(function(){
      greet();
    }, 'error thrown');
  });
});
