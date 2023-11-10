// (c) - BrowserNative <https://browsernative.com/go-incognito/>

function goIncognito(tab) {
  let close = localStorage.getItem('close');
  if(!close) close = "yes";
  
  
  let history = localStorage.getItem('history');
  if(!history) history = "yes";
  
  
  let state = localStorage.getItem('state');
  if(!state) state = "maximized";
  
  
  
  chrome.windows.create({"incognito": !tab.incognito, "focused": true, "state": state});


}

// for toolbar button
chrome.browserAction.onClicked.addListener(function(tab) {
  goIncognito(tab);
});

function onClickHandler(info, tab) {
  goIncognito(tab);
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

// first run
chrome.runtime.onInstalled.addListener(function(details) {
  
  chrome.contextMenus.create({"title": "Go Incognito", "contexts":["page"], "id": "goincog"});
  
  if (details.reason == "install") {
  }
});
