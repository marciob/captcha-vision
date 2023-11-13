// content.js

// Listen for click events on the entire document
document.addEventListener(
  "click",
  function (event) {
    // If the clicked element is an image, send its details to the background script
    if (event.target.tagName === "IMG") {
      chrome.runtime.sendMessage(
        {
          action: "captureCaptcha",
          src: event.target.src,
          // Add any additional data you want to send to the background script here
        },
        function (response) {
          console.log("Sent CAPTCHA details to background page.");
        }
      );
    }
  },
  { capture: true }
); // Use capture to ensure this runs before any other click handlers
