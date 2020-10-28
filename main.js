// schedulr

(function () {
  var Schedulr = function () {
    /*
     * timeSlot function should pass a start date and end date
     * if the system time is within the duration, return true
     *
     * */
    this.timeSlot = function (d) {

      var date = new Date()

      var mark = {
        current_time: date.getTime(),
        start_date: d.start.split('/'),
        end_date: d.end.split('/')
      };

      var startTime = new Date(`${mark.start_date[0]} ${mark.start_date[1]} ${mark.start_date[2]}`).getTime();
      var endTime = new Date(`${mark.end_date[0]} ${mark.end_date[1]} ${mark.end_date[2]}`).getTime();

      if (startTime > endTime) {
        console.warn('End date has to be later than start date!');
        return false;
      }

      if (mark.current_time >= startTime || mark.crrent_time <= endTime) {
        return true;
      } else {
        return false;
      }
    };

    this.render = function (c) {
      var element = c.element;
      var template = c.template;

      var node = document.querySelectorAll(element);
      node.forEach(function (i) {
        i.innerHTML = template;
      });
    };

  };

  window.Schedulr = Schedulr;
}());




