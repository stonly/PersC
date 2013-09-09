function setBadge(text){

  chrome.browserAction.setBadgeText({text: String(text)+'%'});

}

function updateBadge(resp) {
  x = resp.pos;
  var pos = (x >= 0 && x <= 100 && String(x)) || undefined;
  if(x && pos != undefined && pos != null) {
    setBadge(pos); 
  } else if(x > 100) {
    setBadge(100); 
  } else {
    setBadge(0);
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

setBadge(0);
