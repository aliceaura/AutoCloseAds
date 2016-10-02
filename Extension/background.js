var filesys = require("fs");
var adsites = [];

// Read adsites.txt to pull all websites that needs closing ads
// and splits them to 
// Put one site every line at adsites.txt

filesys.readFile("adsites.txt", function(text){
    this.adsites = text.split("\n")
});

// Remove ad tabs that matches url in the text file onCreated

chrome.tabs.onCreated.addListener(function(newTab) {
  for (int i=0; i<adsites.length;i++){
    if (newTab.url.includes(adsites[i])) {
      chrome.tabs.remove(newTab.id);
    }
  }
});

// Remove ad tabs that matches url in the text file onUpdated

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  for (int i=0; i<adsites.length;i++){
    if (tab.url.includes(adsites[i])) {
      chrome.tabs.remove(tab.id);
    }
  }
});
