const Utils = require('../src/utils')

const assert = require('assert');

describe('Add', function() {
  it('it should add numbers', function() {
    assert.equal(Utils.add(2, 3), 5);
  });
});