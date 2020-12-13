console.log("Wishlist-Cart-Extension is running");

//Objects that will store the items for their respective store
//The way we store objects is tentative to change
let neweggJSON = {
    table: []
};
let amazonJSON = {
    table: []
};

//When the extension is first installed, store these empty objects so we can add items to them later
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({newegg: neweggJSON}, function() {
      console.log("Newegg JSON object set to " + neweggJSON);
    });
    chrome.storage.sync.set({amazon: amazonJSON}, function() {
        console.log("Amazon JSON object set to " + amazonJSON);
      });
});