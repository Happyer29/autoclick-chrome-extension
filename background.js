try {

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
    if(changeInfo.status === 'complete' && /^file/.test(tab.url)){ //change to http on prod
        // chrome.tabs.executeScript({
        //         file: "foreground.js"
        //     }, function (){
        //         console.log("injected jquery")
        //
        //
        //     })

        // chrome.scripting.executeScript({
        //     target: {tabId: tabId},
        //     files: ["./foreground.js"]
        // }).then(r => console.log("injected devtools")).catch(err => console.log(err))

        // if(changeInfo.status === 'complete' && /^http/.test(tab.url)) { //change to http on prod
        //     chrome.scripting.executeScript({
        //         target: {tabId: tabId},
        //         files: ["foreground.js"]
        //     })
        //         .then(() => {
        //             console.log("injected")
        //         }).catch(err => console.log(err))
        // }

        // chrome.scripting.executeScript({
        //     target: {tabId: tabId},
        //     files: ["./libs/jquery-3.6.0.min.js", "./foreground.js"]
        // })
        //     .then(() => {
        //         console.log("injected")
        // }).catch(err => console.log(err) )
    }
})


//console.log("test");

} catch (e) {
    console.error(e);
}