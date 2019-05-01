var f = function () {    
 };

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {        
        f = function () {
            chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                if (tabs.length > 0) {
                    let tab = tabs[0]
                    chrome.tabs.update(tab.id, { url: `https://www.google.com/search?q=${tab.url.split('?q=').pop().split('&')[0]}`});
                }
            });
        }
    }
);

chrome.commands.onCommand.addListener(function (command) {        
    if (command === "search-google") {
        f()
    }
});