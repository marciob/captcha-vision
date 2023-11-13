// popup.js

document.addEventListener("DOMContentLoaded", function () {
  var captureButton = document.getElementById("capture-btn");
  if (captureButton) {
    captureButton.addEventListener("click", function () {
      chrome.tabs.executeScript({
        code: "window.userClickedExtension = true;",
      });
      window.close(); // Close the popup as the user will interact with the page now
    });
  } else {
    console.error("The capture button was not found.");
  }
});
