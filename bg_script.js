chrome.browserAction.setBadgeText({text:'0%'});

function updateBadge(resp) {
  x = resp.pos;
  var pos = (x >= 0 && x <= 100 && String(x)) || undefined;
  if(x && pos != undefined && pos != null) {
    chrome.browserAction.setBadgeText({text:String(pos)+'%'}); 
  } else {
    chrome.browserAction.setBadgeText({text:'0%'}); 
  }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    updateBadge(request);
    sendResponse({});
  }
);

//credit : http://samdutton.wordpress.com/2010/12/16/debugging-google-chrome-extensions/

chrome.tabs.onSelectionChanged.addListener(
  function handleSelectionChange(tabId, selectInfo) {
      chrome.tabs.sendRequest(tabId, {}, 
            updateBadge);
    }
);

