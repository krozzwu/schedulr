
// schedulr

const Schedulr = function () {
  /*
   * timeSlot function should pass a start date and end date
   * if the system time is within the duration, return true
   *
   * */
  this.timeSlot = function (d) {

    var date = new Date()

    var mark = {
      current_time: date.getTime(),
      start_date: new Date(`${d.start}, 00:00:00`).getTime(),
      end_date: new Date(`${d.end}, 23:59:59`).getTime()
    };

    if (mark.start_date > mark.end_date) {
      console.warn('End date has to be later than start date!');
      return false;
    }

    if (mark.current_time >= mark.start_date && mark.current_time <= mark.end_date) {
      return true;
    } else {
      return false;
    }
  };


};

module.exports = Schedulr;

