//let what = document.querySelector('button[data-bn-type="button"][class^=" css-"]');
$(function(){

// try {
//     let what = document.getElementsByClassName('css-5k5hy9');
//     // $(document).ready(function() {
//     //     console.log("test");
//     //     let id = $("div:contains('Макс')");
//     //     let interval = setInterval(() => {
//     //         $("div:contains('Макс')").click((e) => {
//     //             console.log("clicked Макс")
//     //         })
//     //     }, 500);
//     // });
//     // //$("body").html("test");
//     // console.log("test");
//     // $(".lnXdpd").click((e) => {
//     //     console.log(e.target.nodeName)
//     // });
// } catch (error) {
//     console.error(error);
// }

//var button = document.createElement("button");
//button.innerHTML = "Start Auto Clicker"
//body.appendChild(button);








// $("#__APP").after("<button>Start Auto Clicker</button>");
//     var button = $("button").last()
//     var body = document.getElementsByTagName("body")[0];
//     button.on("click", function() {
//         console.log("test");
//     if(stop===0) {
//         stop = 1
//         console.log("stopped")
//         //this.innerHTML = "Start Auto Clicker"
//     } else if(stop===1) {
//         stop = 0
//         console.log("started")
//         //this.innerHTML = "Stop Auto Clicker"
//     }
// });

    let bttnMax = contains("div", "Макс");
    //let bttnMax = document.querySelector('div:contains(\'Макс\')');
    //console.log(bttnMax.textContent);
    //let bttn = document.querySelector('.css-1bpso26:first-of-type');
    let bttn = contains("button", "Купить");
    var stop = 0;


    setInterval(function(){
        console.log("interval");
        simulateEvent(bttnMax, "click")
        simulateEvent(bttn, "click")
    }, 1000);



    function contains(selector, text) {
        return Array.from(document.querySelectorAll(selector))
            .find(el => el.textContent === text);
    }


function simulateEvent(element, eventName)
    {
        var options = extend(defaultOptions, arguments[2] || {});
        var oEvent, eventType = null;

        for (var name in eventMatchers)
        {
            if (eventMatchers[name].test(eventName)) { eventType = name; break; }
        }

        if (!eventType)
            throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

        if (document.createEvent)
        {
            oEvent = document.createEvent(eventType);
            if (eventType == 'HTMLEvents')
            {
                oEvent.initEvent(eventName, options.bubbles, options.cancelable);
            }
            else
            {
                oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
                    options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
                    options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
            }
            element.dispatchEvent(oEvent);
        }
        else
        {
            options.clientX = options.pointerX;
            options.clientY = options.pointerY;
            var evt = document.createEventObject();
            oEvent = extend(evt, options);
            element.fireEvent('on' + eventName, oEvent);
        }
        return element;
    }

    function extend(destination, source) {
        for (var property in source)
            destination[property] = source[property];
        return destination;
    }

    var eventMatchers = {
        'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
        'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
    }
    var defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    }




})





