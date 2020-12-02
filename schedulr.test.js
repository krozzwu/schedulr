const Schedulr = require('./src/schedulr');

test('adds 1 + 2 to equal 3', () => {
  const s = new Schedulr;
  const call = s.timeSlot({
    start: '12/01/2020',
    end: '12/31/2020'
  });
  expect(call).toBe(true);
});


