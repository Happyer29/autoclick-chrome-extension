try{
console.log("test");

chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
        console.log(request);
        // chrome.devtools.inspectedWindow.eval(
        //     'console.log(' + request +')');
        // if (request.response.bodySize > 40*1024) {
        //     chrome.devtools.inspectedWindow.eval(
        //         'console.log("Large image: " + unescape("' +
        //         escape(request.request.url) + '"))');
        // }
    }
);

} catch (e) {
    console.error(e);
}