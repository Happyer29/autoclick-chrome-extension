try {
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
//     if(changeInfo.status === 'complete' && /^http/.test(tab.url)){
//         chrome.scripting.executeScript({
//             target: {tabId: tabId},
//             files: ["./foreground.js"]
//         })
//             .then(() => {
//                 console.log("injected")
//         }).catch(err => console.log(err) )
//     }
// })


console.log("test");

} catch (e) {
    console.error(e);
}