const Schedulr = require('./src/schedulr');

test('Should return true if test date is within the duration.', () => {
  const s = new Schedulr;
  const call = s.timeSlot({
    start: '12/01/2020',
    end: '12/31/2020'
  });
  expect(call).toBe(true);
});

//TODO: need tests for case without start date and without end date


