/**
 * Flamite
 */

var Flamite = (function() {
  var appUrl = 'http://localhost:3000/';

  function openAppTab(tabId,url) {
      var url = appUrl + (url || "");
      if (tabId) {
          chrome.tabs.update(tabId, {
              url: url
          });
      } else {
          chrome.tabs.create({
              url : url
          });
      }
  }

  function post(url,data) {
      var adata =
        {
            url: appUrl+url,
            data: data,
            type: "POST",
            dataType: "jsonp",
            crossDomain: true,
        };
      return $.ajax(adata);
  }

  function chromeEvent() {

    // listen Flamite button
    chrome.browserAction.onClicked.addListener(function(tab) {
      openAppTab();
    });
  }

  return {
    openAppTab: openAppTab,
    post: post,

    init: function() {
      // init
      Flamite.Facebook.init();

      // listen Chrome event
      chromeEvent();
    }
  };
})();
