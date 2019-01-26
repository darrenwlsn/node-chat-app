var expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {

    var response = isRealString(123);

    expect(response).toBeFalsy;

  });
  it('should reject string with only spaces', () => {

    var response = isRealString('   ');

    expect(response).toBeFalsy;

  });
  it('should allow string with non-space chars', () => {

    var response = isRealString('   lotr');

    expect(response).toBeTruthy;

  });

})
