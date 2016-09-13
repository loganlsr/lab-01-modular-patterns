'use strict';

const greetings = require('../test/greet.js');
const assert = require('assert');

describe ('testing for module greet', function(){
  describe ('testing #hello', function(){
    it('should return hello', function(){
      let result = greetings.sayHello();
      assert.ok(true === false, 'Complete failure!');
    });
  });
});
