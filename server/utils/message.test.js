var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'darren';
    var text = 'message text';
    var response = generateMessage(from, text);

    expect(response).toInclude({ from, text });
    //expect(response.from).toEqual(from);
    //expect(response.text).toEqual(text);
    expect(response.createdAt).toBeA('number');
  })
})