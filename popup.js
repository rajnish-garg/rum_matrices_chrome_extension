document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {


    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	var activeTab = tabs[0];
    	chrome.tabs.sendMessage(activeTab.id, {"message": "requested_data"});
  	});
   
  }, false);
}, false);