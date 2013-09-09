console.log("pos");

var pos = Math.round((parseFloat(document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight )) * 100));

window.onscroll=function(){ 

  pos = Math.round((parseFloat(document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight )) * 100));

  chrome.runtime.sendMessage({pos: pos}, function(response) {
  });

}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        console.log("jump")
        sendResponse({"pos": pos}); 
    }
);
