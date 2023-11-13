// background.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "captureCaptcha") {
    // Open a new tab with the image URL sent from the content script
    chrome.tabs.create({ url: request.src }, function (tab) {
      console.log("New tab opened with CAPTCHA image.");
    });
    sendResponse({ result: "Tab opened with CAPTCHA image." });
  }
});
