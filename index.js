const Schedulr = require('./src/schedulr');

const s = new Schedulr;
const call = s.timeSlot({
  start: '12/03/2020'
});

console.log(call);
