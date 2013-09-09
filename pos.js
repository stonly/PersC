console.log("pos");

function getPos(){
    return Math.round((parseFloat(document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight )) * 100));
}

var pos = getPos();

window.onscroll=function(){ 

  pos = getPos();

  chrome.runtime.sendMessage({pos: pos}, function(response) {});

}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        sendResponse({"pos": pos}); 
    }
);
