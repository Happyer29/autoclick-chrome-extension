try {
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
    if(changeInfo.status === 'complete' && /^http/.test(tab.url)){ //change to http on prod
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ["./libs/jquery-3.6.0.min.js", "./foreground.js"]
        })
            .then(() => {
                console.log("injected")
        }).catch(err => console.log(err) )
    }
})


//console.log("test");

} catch (e) {
    console.error(e);
}