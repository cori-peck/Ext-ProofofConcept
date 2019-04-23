// this file interfaces with the browser API providing features that will persisit across all parts of the internet

chrome.contextMenus.create({
    id: 'ExtensionPractice',
    title: 'Chrome Extention Practice',
    contexts: ['all']    //allows user to right click anywhere to see extension  option
})

chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'getContactInfo'});
    });
});