var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'darren';
    var lat = 15;
    var long = 150;
    var response = generateLocationMessage(from, lat, long);

    expect(response.from).toContain('darren');
    expect(response.url).toContain(`https://www.google.com/maps?q=${lat},${long}`);
    expect(response.createdAt).toBeA('number');

  });
});