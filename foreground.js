function simulateClick(obj) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var canceled = !obj.dispatchEvent(evt);
    /*

      if(canceled) {
        // A handler called preventDefault
        alert("canceled");
      } else {
        // None of the handlers called preventDefault
        alert("not canceled");
      }
      */
}

var what = document.querySelector('.gb_f');
simulateClick(what);