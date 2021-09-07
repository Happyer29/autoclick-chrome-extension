function simulateClick(obj) {
    const evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
       0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var canceled = !obj.dispatchEvent(evt);


      if(canceled) {
        // A handler called preventDefault
        alert("canceled");
      } else {
        // None of the handlers called preventDefault
        console.log(obj.className);
      }

}

let what = document.querySelector('button[data-bn-type="button"][class^=" css-"]');
setInterval(()=>simulateClick(what), 20);

